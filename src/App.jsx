import { useState } from "react";
import {DropdownOne,DropDownThree,DropDownTwo} from "./Components/Dropdown";
import FileUpload from "./Components/FileUpload";
import OTP from "./Components/OTP";
// import OTP from './Components/OTP';

function App() {
  const [optionVisbility, setOptionVisbility] = useState(['2'])


  const [data1] = useState({
    optionValue: ["option1", "option2", "option3","option4"],
    selectedValue: "option",
  });

  const [data2] = useState(["z", "y", "x", "w", "v", "u"]);

  const [data3] = useState([
    { key: "q", isSelected: true },
    { key: "r", isSelected: false },
    { key: "s", isSelected: false },
    { key: "t", isSelected: false },
  ]);

  return (
    <>
      {/* <OTP/> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <DropdownOne
          id="1"
          dropDownValue={dropDownValue}
          setDropdownValue={setDropdownValue}
          optionList={data2}
        /> */}

        {/* <DropdownOne
          id="1"
          selectedValue="4"
          optionList={data2}
          isOpen={false}


        /> */}

        {/* <DropdownOne
          id="2"
          optionVisbility={optionVisbility}
          setOptionVisbility={setOptionVisbility}
          selectedValue='w'
          optionList={data2}
          onMount={(selectedValue,data)=>{
            console.log(selectedValue,data);
          }}
          isOpen={false}
        />


        <DropDownTwo
          id="3"
          optionVisbility={optionVisbility}
          setOptionVisbility={setOptionVisbility}
          optionList={data1}
          onMount={(selectedValue,data)=>{  
          }}
        />
        <br/>


        <DropDownThree
          id="4"
          optionVisbility={optionVisbility}
          setOptionVisbility={setOptionVisbility}
          optionList={data3}
          onMount={(selectedValue,data)=>{
          }}
        /><br/> */}
        
       
        {/*  
      <OTP/>  */}
      </div>
      {/* <div>
    <FileUpload/> 
    <FileUpload/> 
    <FileUpload/>  */}
    <FileUpload/> 

      {/* </div> */}
    </>
  );
}

export default App;
