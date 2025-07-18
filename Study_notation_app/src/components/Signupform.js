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


            </form>
        </div>
    )
}

export default Signupform;