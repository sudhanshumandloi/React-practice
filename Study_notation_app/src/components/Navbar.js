import React from "react";
import logo from "../assets/Logo.svg";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";

function Navbar(props){
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn



    return (
        <div className="flex justify-evenly">
            <Link to="/">
                 <img src={logo} alt='logo' widtg={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex ml-3 gap-3">
                    <li>
                        <Link to = "/" >Home</Link>
                    </li>
                    <li>
                        <Link to = "/" >About</Link>
                    </li>
                    <li>
                        <Link to = "/" >Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex ml-3 gap-3">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button>
                            Signup
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged out");
                        }}>
                            Log out
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashbord">
                        <button>
                            dashbord
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Navbar;