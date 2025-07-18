import React, { useState } from "react";
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"

const Loginform = () => {
    const [formData, setFormdata] = useState({email:'', password:'' });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormdata( prevData => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
         ) )
    }

    return (
        <div>
            <form>
                <label>
                    <p>
                        Email Address<sub>*</sub>
                    </p>
                    <input required
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"/>
                </label>

                
                <label>
                    <p>
                        Password<sub>*</sub>
                    </p>
                    <input required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"/>

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>
            </form>
        </div>
    )
}

export default Loginform;