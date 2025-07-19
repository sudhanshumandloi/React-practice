import React from "react";
import frame from "../assets/frame.png";
import Loginform from "./Loginform";
import Signupform from "./Signupform";

function Template({title, desc1, desc2, image, formtyp, setIsLoggedIn}){
    return(
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formtyp === "signup" ?
                (<Signupform setIsLoggedIn={setIsLoggedIn} />):
                (<Loginform setIsLoggedIn={setIsLoggedIn} />)
                }

                <div>
                    <div></div>
                    <div>OR</div>
                    <div></div>
                </div>

                <button>
                    <p>Sign Up with Google</p>
                </button>
            </div>

            <div>
                <img src={frame} alt="frame" height={584} width={558} loading="lazy"/>

                <img src={image} alt="student" height={490} width={558} loading="lazy"/>
            </div>
        </div>
    )
}

export default Template;