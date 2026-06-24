import React, { useState } from "react";
const Password = () => {
  const [hidePassword, setHidePassword] = useState(false);

  const handelHide = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div>
      <form action="form">
        <input
          type={hidePassword ? "text" : "password"}
          placeholder=" Inter your password..."
        />

        <button
          style={{ width: "50px", backgroundColor: "blue" }}
          type="button"
          onClick={handelHide}
        >
          {!hidePassword ? "Show" : "hide"}
        </button>
      </form>
    </div>
  );
};
export default Password;
