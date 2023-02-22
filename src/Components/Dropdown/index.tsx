import {useState } from "react";

const Dropdown: React.FC<{ options?: Array<string>}>  = ({
  })=>{
    const [options, setOptions] = useState(['a','b','c','d','e','f']);
    const handleSelectbox=(e: React.ChangeEvent<HTMLSelectElement>):void=>{
        alert(e.target.value)
    }
    return (
       
<>
<div className="chosen-wrapper" data-js="custom-scroll">
  <select className="chosen-select" data-placeholder="Lorem ipsum dolor sit amet" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleSelectbox(e)}>
    {

        options.map((option,key)=>(
            <option key={key}>{option}</option>
        ))
    }

  </select>
</div>

<div className="chosen-wrapper chosen-wrapper--style2" data-js="custom-scroll">
  <select className="chosen-select" data-placeholder="Lorem ipsum dolor sit amet" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleSelectbox(e)}>
  {

options.map((option,key)=>(
    <option key={key}>{option}</option>
))
}
  </select>
</div>
</>
    )
  };
 
  export default Dropdown;