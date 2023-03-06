import { useState } from "react";
import "./index.css";

const OTP = ({ otp }) => {
  const [userOtp, ] = useState({});
  const [otpCheck, setotpCheck] = useState(false);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.currentTarget.nextElementSibling) {
      e.currentTarget.nextElementSibling.focus();
    }

    if (
      e.keyCode === 8 &&
      e.currentTarget.previousElementSibling &&
      e.currentTarget.value === ""
    ) {
      e.currentTarget.previousElementSibling.focus();
    }
  };

  const handleonChange = (e) => {
    let enteredOtp = userOtp;
    enteredOtp[e.currentTarget.name] = e.currentTarget.value.length>1?e.currentTarget.value[1]:e.currentTarget.value;
    console.log('enteredOtp',Object.values(enteredOtp).join(""));       

    if (e.currentTarget.nextElementSibling) {
      if (e.currentTarget.value !== "") {
        e.currentTarget.nextElementSibling.focus();
      }
    } else {
      
        if (Object.values(enteredOtp).join("") === otp) {
          console.log("Sign In Successfully");
          console.log(userOtp)
          console.log('enteredOtp',Object.values(enteredOtp).join(""));
        } else {
          setotpCheck(true);
          console.log(userOtp)
          console.log('enteredOtp',Object.values(enteredOtp).join(""));
        }
       
    }
    if (e.currentTarget.value !== "" && e.currentTarget.value.length !== 1) {
      let checkVal = "";
      checkVal += e.currentTarget.value;
      e.currentTarget.value = checkVal[1];
    }
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <div style={{ display: "flex" }}>
        <form
          method="get"
          className="digit-group"
          data-group-name="digits"
          data-autosubmit="false"
          autoComplete="off"
        >
          {Array(4)
            .fill()
            .map((elem, index) => (
              <input
                key={index}
                className={otpCheck ? "errorInputBox" : ""}
                type="number"
                name={`digit-${index}`}
                maxLength={1}
                onChange={(e) => handleonChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            ))}
        </form>
      </div>
      <div>{otpCheck && <p style={{ color: "red" }}>Invalid Otp.</p>}</div>
    </div>
  );
};

export default OTP;
