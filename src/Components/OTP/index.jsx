import { useState } from "react";
import "./index.css";

const OTP=({otp})=> {
  const [confirmOtp, setconfirmOtp] = useState(0);
  
  const handleKeyUp= (e) => {
// document.querySelectorAll("#digit2")[0].focus()

   
}


  

  return (
    <>
    <div className="prompt">
Enter the code generated on your mobile device below to log in!
</div>
<form method="get" className="digit-group" data-group-name="digits" data-autosubmit="false" autoComplete="off">
<input type="text" id="digit-1" name="digit-1" data-next="digit-2" maxLength={1} onChange={handleKeyUp} />
<input type="text" id="digit2" name="digit-2" data-next="digit-3" data-previous="digit-1" maxLength={1} />
<input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" maxLength={1} />
<input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" maxLength={1} />
</form>
</>
  );
};

export default OTP;
