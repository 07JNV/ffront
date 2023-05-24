

import "./styles/Signin.css"
import img from "./images/li.jpg"
import padlock from "./images/padlock.png"
import user from "./images/user.png"
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";






const link = "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css";
const integrity = "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u";

function Signin() {
    const url = "http://localhost:8080/login";



    function hand(response) {
        console.log(response.credential);
        var userobj = {};
        userobj = jwt_decode(response.credential);
        console.log(userobj);
        var ob = {};
        ob = { email: userobj.email, password: userobj.sub }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ob)
        };
        if (Object.keys(ob).length) {
            console.log("done")

            const func = async () => {

                const response = await fetch(url, requestOptions);
                console.log(response);
                const data = await response.json();
                const success = data.success;
                // console.log(data);
                if (success) {
                    sessionStorage.setItem("token", data.accessToken);
                    sessionStorage.setItem("email", data.user.email);
                    sessionStorage.setItem("name", data.user.fullName);
                    console.log(success);
                    navigate("/user/dashboard", { state: data });

                }
            }

            func();
            return;
        }
    }







    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        //  console.log(data);



        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };



        const func = async () => {

            const response = await fetch(url, requestOptions);
            console.log(response);
            const data = await response.json();
            const success = data.success;
            console.log(data);
            if (success) {
                sessionStorage.setItem("token", data.accessToken);
                sessionStorage.setItem("email", data.user.email);
                sessionStorage.setItem("name", data.user.fullName);
                console.log(success);
                navigate("/user/dashboard", { state: data });

            }
        }

        func();

    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>signin</title>
                <link rel="canonical" href="/signin" />
            </Helmet>
            <div className="mnb">


                <div className="bm1">
                
                    <div className="sgn">
                        <div className="bi">
                            <img id="im" src={img} alt="#" />

                        </div>
                        <div className="lp">
                            <form onSubmit={handleSubmit(onSubmit)} className="frm" >

                                <div className="hd">
                                    <p>Login Account</p>
                                </div>
                                <div className="cre">

                                    <div className="cred">
                                        <div className="em">
                                            <label for="exampleInputEmail1"  ><img id="e" src={user} /></label>
                                            <input id="emi" type="email" {...register("email")} />
                                        </div>
                                        <div className="pw">
                                            <label for="exampleInputEmail1"  ><img id="e" src={padlock} /></label>
                                            <input id="pwi" type="password" {...register("password")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="re">
                                    <label>Remember me </label>
                                    <input type="checkbox" />
                                </div>
                                <div className="sbt">
                                    <button id="bn">Sign In</button>
                                </div>
                                <div className="fp" >
                                    <a href="#">Forget password ?</a>
                                </div>
                                <div className="da" >
                                    Don't have account?  <a href="#" >Sign Up</a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>





        </div>


    );
}

export default Signin;




// function isObjEmpty (obj) {
//     return Object.keys(obj).length === 0;
// }

// var emptyObject = {};
// var object = {"foo": "bar"};

// console.log(isObjEmpty(emptyObject))
// console.log(isObjEmpty(object))




