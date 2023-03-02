import {useState } from "react";
import './index.css'


const Dropdown= () =>{
    const [uploadedFile, setUploadedFile] = useState([]);
    
    
    const handleFileChange = (e) => {
        if (e.target.files) {
            setUploadedFile([...uploadedFile,e.target.files[0]])

        }
      };

    const deleteFile = (ind) => {
      const confirmBox = window.confirm(
        "Do you really want to delete this file?"
      )
      if (confirmBox === true) {
        let newFile=uploadedFile.filter((file,index)=>ind!==index)
        setUploadedFile(newFile)
      }
        

        
      };
    
      
    
      return (
        <>
        <div>
          <input type="file" onChange={handleFileChange} />
    
    
        </div>
          {uploadedFile.map((file,ind)=>(<p key={ind}>{file.name}<button onClick={()=>{deleteFile(ind)}} style={{color:'red'}}>X</button></p>))}
        </>
      );
    }
    
    export default Dropdown;
    
  