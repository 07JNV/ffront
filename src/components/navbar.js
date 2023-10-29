import "./styles/Signup.css"
import SignUpForm from "./signin";
import clogo from "./images/clogo.png"
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    
const navigate =useNavigate();
   
    const logout=()=>{
        sessionStorage.removeItem("email");
        window.location.reload();
        navigate("/")
    }
    
    return (
        <div>
            <div className='navbar'>
                <div className='clogo'>
                    <img id='clogo' src={clogo} />
                </div>
                <div className='contactus'>
                    {sessionStorage.length===0 && (<a href="/signin">
                        <button id='conbtn' >
                            LOGIN/REGISTER
                        </button>
                    </a>)}

                    { sessionStorage.length>0 &&
                         (
                            <button id="conbtn" onClick={logout}>
                                LOGOUT
                            </button>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default Navbar;