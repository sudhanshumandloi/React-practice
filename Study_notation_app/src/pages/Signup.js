import React from "react";
import Template from "../components/Template";
import signupimage from "../assets/signup.png";

function Signup({setIsLoggedIn}){
    return (
        <div>
            <Template
                title={"Join the millions learning to code with StudyNotation "} 
                desc1={"Build skills for today, tomorrow, and beyound."}
                desc2={"Education to future-proof career."}
                image={signupimage}
                formtyp={"signup"}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Signup;