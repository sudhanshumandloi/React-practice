import React from "react";
import Template from "../components/Template";
import loginimage from "../assets/login.png"

function Login({setIsLoggedIn}){
    return (
        <div>
            <Template
                title={"Welcome Back "}     
                desc1={"Build skills for today, tomorrow, and beyound."} 
                desc2={"Education to future-proof career."}
                image={loginimage}
                formtyp={"login"}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Login;