import { useState } from "react";

const Loginout = () => {

    const [btnName, setBtnName] = useState("LogIn");

    return (
        <div className="logInOut-container">
            <button className="logInOut-btn" onClick={() => {
                btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
            }}>{btnName}</button>
        </div>
    );
};

export default Loginout;