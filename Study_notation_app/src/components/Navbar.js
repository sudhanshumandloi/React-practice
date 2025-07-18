import React from "react";
import logo from "../assets/Logo.svg";
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <div className="flex">
            <Link to="/">
                 <img src={logo} alt='logo' widtg={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex">
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

            <div>
                {
                    <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>
                }
                {
                    <Link to="/signup">
                        <button>
                            Signup
                        </button>
                    </Link>
                }
                {
                    <Link to="/">
                        <button>
                            Log out
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Navbar;