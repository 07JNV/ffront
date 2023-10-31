import "./styles/Signup.css"
import SignUpForm from "./signin";
import clogo from "./images/clogo.png"
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("email");
        if (sessionStorage.length === 0) {
            toast.info('You have successfully logged out.');

        }
        setTimeout(() => {
            window.location.reload();
            navigate("/");
        }, 3000);
    }



    return (
        <div>
            <div className='navbar'>
                <div className='clogo'>
                    <img id='clogo' src={clogo} />
                </div>
                <div className='contactus'>
                    {sessionStorage.length === 0 && (<a href="/signin">
                        <button id='conbtn' >
                            LOGIN/REGISTER
                        </button>
                    </a>)}

                    {sessionStorage.length > 0 &&
                        (
                            <button id="conbtn" onClick={logout}>
                                LOGOUT
                            </button>
                        )
                    }
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                </div>
            </div>
        </div>
    );
}

export default Navbar;