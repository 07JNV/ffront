

import "./styles/Signin.css"
import img from "./images/li.jpg"
import padlock from "./images/pss.png"
import user from "./images/mail.png"
import { useForm } from "react-hook-form";
import { useNavigate ,Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { useEffect } from "react";
import { useCookies } from 'react-cookie';












function Signin() {
    const navigate = useNavigate();
    const back = process.env.REACT_APP_URL;
    const [cookies, setCookie,removeCookie] = useCookies(['email']);
    const url = back +"/users/signin";
    console.log(back)
console.log(url)

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };



        const func = async () => {

            const response = await fetch(url, requestOptions);
            console.log(response);
            const data = await response.json();
            const token = data.token;

            console.log(data);
            if (token) {
                alert("signin successfully")      
                // setCookie('email', data.user.email, { path: '/pricing' });
                // localStorage.setItem('log','true');
                localStorage.setItem('em',data.user.email);
                setCookie('email', data.user.email, { path: '/' });
                setCookie('el', data.user.email, { path: '/pricing' });
                navigate("/user/dashboard", { state: data });

            }
            
            if(!token){
            alert("bad credentials")
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
                            <div className="hd">
                                <p>Login Account</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}  >




                                <div className="cred">

                                    <div className="eml">
                                        <div ><img className="ui" alt="#" src={user} /> </div>
                                        <div ><input className="emil" type="email" {...register("email")} /> </div>
                                    </div>

                                    <div className="pwl">
                                    <div  ><img className="ui" alt="#" src={padlock} /> </div>
                                    <div ><input className="pwil" type="password" {...register("password")} /> </div>

                                    </div>
                                </div>

                                <div className="rm">
                                    <label>Remember me </label>
                                    <input type="checkbox" />
                                </div>
                                <div className="li">
                                    <button id="lbn" type="submit">Sign In</button>
                                </div>
                                <div className="fp" >
                                    <a href="#">Forget password?</a>
                                </div>
                                <div className="da" >
                                    Don't have account?  <a href="/signup" >Sign Up</a>
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










