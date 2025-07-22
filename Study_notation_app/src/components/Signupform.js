import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const Signupform = ({setIsLoggedIn}) => {

    const navigat = useNavigate();

    const [formData, setFormdata] = useState({
        firstname:'', lastname:'', email:'', password:'', confirmpassword:''
    });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const changeHandler = (event) =>{
        setFormdata( prevData => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
         ) )
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Password do not match");
            return ;
        }
        setIsLoggedIn(true);
        toast.success("account is created");
        const accountData = {
            ...formData
        };
        console.log(accountData);
        navigat("/dashbord")

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* student-instructor tab */}
                <div>
                    <button>Student</button>
                    <button>Instructor</button>
                </div>

                 {/* firstname - lastname */}
                <div className="w-full flex gap-x-4 mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name<sup className="text-pink-200">*</sup>
                        </p>
                        <input required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="Enter your first name"
                            value={formData.firstname}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                    
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last Name<sup className="text-pink-200">*</sup>
                        </p>
                        <input required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="Enter your last name"
                            value={formData.lastname}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>

                {/* email addree */}
                <div className="mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Email Address<sup className="text-pink-200">*</sup>
                        </p>
                        <input required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter your email address"
                            value={formData.email}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>
                
                {/* password - confirm password */}
                <div className="w-full flex gap-x-4 mt-[20px]">
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.password}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                       />
                        <span className="absolute right-3 top-[38px] cursor-pointer" 
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword
                            ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                            : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>
                    
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input required
                            type={showPassword ? ("text") : ("password")}
                            name="confirmpassword"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.confirmpassword}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                       />
                        <span className="absolute right-3 top-[38px] cursor-pointer" 
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword
                            ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                            : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>

                    </label>
                </div>

                {/* submit button */}
                <div>
                    <button className="w-full bg-yellow-50 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px] mt-6">
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signupform;