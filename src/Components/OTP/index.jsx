import { useState } from "react";
import "./index.css";

const OTP = ({ otp }) => {
  const [confirmOtp, setconfirmOtp] = useState("");
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
    let otp1 = "";
    otp1 += confirmOtp + e.currentTarget.value;
    setconfirmOtp(otp1);
    if (e.currentTarget.nextElementSibling) {
      if (e.currentTarget.value !== "") {
        e.currentTarget.nextElementSibling.focus();
      }
    } else {
      if (confirmOtp === otp) {
        // alert("Otp");
      } else {
        // console.log(confirmOtp);
        setotpCheck(true);
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
      <div>
        <form
          method="get"
          className="digit-group"
          data-group-name="digits"
          data-autosubmit="false"
          autoComplete="off"
        >
          <input
            className={otpCheck ? "errorInputBox" : ""}
            type="number"
            id="digit-1"
            name="digit-1"
            maxLength={1}
            onChange={(e) => handleonChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />

          <input
            className={otpCheck ? "errorInputBox" : ""}
            type="number"
            id="digit2"
            name="digit-2"
            maxLength={1}
            onChange={(e) => handleonChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <input
            className={otpCheck ? "errorInputBox" : ""}
            type="number"
            id="digit-3"
            name="digit-3"
            maxLength={1}
            onChange={(e) => handleonChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <input
            className={otpCheck ? "errorInputBox" : ""}
            type="number"
            id="digit-4"
            name="digit-4"
            onChange={(e) => handleonChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </form>
      </div>
      <div>{otpCheck && <p style={{ color: "red" }}>Invalid Otp.</p>}</div>
    </div>
  );
};

export default OTP;
