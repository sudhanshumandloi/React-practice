import React from "react";
import frame from "../assets/frame.png";
import Loginform from "./Loginform";
import Signupform from "./Signupform";

function Template({title, desc1, desc2, image, formtyp, setIsLoggedIn}){
    return(
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
            <div>
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
                    {title}
                </h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-richblack-100">{desc1}</span>
                    <br />
                    <span className="text-blue-100 italic">{desc2}</span>
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