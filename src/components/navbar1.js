
import "./styles/navbar1.css"
import comlogo from "./images/clogo.png"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import menuicon from "./images/menu.png"
import { useState } from "react";

function Nav() {

    const [show, setshow] = useState(false);

    const menubar = () => {
        setshow(!show);
    }

    const navigate = useNavigate();

    const handleLogout = () => {
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
        <div className="mnav">

            <div className="navlogo">
                <img src={comlogo} alt="#" />
            </div>
            <div className="navlinks">
                <div className="menuicon" onClick={menubar}>
                    <img src={menuicon} alt="#" />
                </div>

                <a className="aref" href="/home">Home</a>

                <a className="aref" href="/contact">Contact</a>
                <a className="aref" href="/pricing">Pricing</a>
                <a className="aref" href="/news">News</a>
                {(sessionStorage.length === 0) && (<a className="aref" href="/SignIn">SignIn</a>)}
                {(sessionStorage.length > 0) && (<p className="aref" onClick={handleLogout}>Logout</p>)}
            </div>

            {show && (
                <div className="notshow">
                    <div className="icon_items"  ><div className="icon_itemc"><a style={{ textDecoration: "none", color: "white", marginTop: "10px" }} href="/">Home</a></div></div>
                    <div className="icon_items"><div className="icon_itemc"><a style={{ textDecoration: "none", color: "white", marginTop: "10px" }} href="/contact">Contact</a></div></div>
                    <div className="icon_items"><div className="icon_itemc"><a style={{ textDecoration: "none", color: "white", marginTop: "10px" }} href="/pricing">Pricing</a></div></div>
                    <div className="icon_items"><div className="icon_itemc"> <a style={{ textDecoration: "none", color: "white", marginTop: "10px" }} href="/news">News</a></div></div>
                    {(sessionStorage.length === 0) && (<div className="icon_items"><div className="icon_itemc"><a style={{ textDecoration: "none", color: "white" }} href="/SignIn">SignIn</a></div></div>)}
                    {(sessionStorage.length > 0) && (<div className="icon_items"><div className="icon_itemc"><p style={{ textDecoration: "none", color: "white" }} onClick={handleLogout}>Logout</p></div></div>)}
                </div>
            )}
            <ToastContainer
                position="bottom-right"
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
    );




}



export default Nav;