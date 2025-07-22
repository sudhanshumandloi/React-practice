import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const Loginform = ({setIsLoggedIn}) => {

    const navigat = useNavigate();

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

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in")
        navigat("/dashbord")
    }

    return (
        <div>
            <form onSubmit={submitHandler}
                className="flex flex-col w-full gap-y-4 mt-6">
                <label className="w-full"> 
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email Address<sup className="text-pink-200">*</sup>
                    </p>
                    <input required
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="email"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                </label>

                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Password<sup className="text-pink-200">*</sup>
                    </p>
                    <input required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="password"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>

                    <Link to="#">
                        <p>Forget Password</p>
                    </Link>
                </label>
                 
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default Loginform;