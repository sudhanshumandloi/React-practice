import React, { useState } from "react";

const Signupform = () => {
    const [formData, setFormdata] = useState({
        firstname:'', lastname:'', email:'', password:'', confirmpassword:''
    });

    const changeHandler = () =>{}

    return (
        <div>
            <form>
                {/* student-instructor tab */}
                <div>
                    <button>Student</button>
                    <button>Instructor</button>
                </div>
                
                 {/* firstname - lastname */}
                <div>
                    <label>
                        <p>First Name<sub>*</sub></p>
                        <input required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="Enter your first name"
                            value={formData.firstname}
                        />
                    </label>
                    
                    <label>
                        <p>Last Name<sub>*</sub></p>
                        <input required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="Enter your last name"
                            value={formData.lastname}
                        />
                    </label>
                </div>


                {/* password - confirm password */}
                <div>

                </div>


            </form>
        </div>
    )
}

export default Signupform;