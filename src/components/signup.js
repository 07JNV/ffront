

import "./styles/Signin.css"
import img from "./images/li.jpg"
import padlock from "./images/pss.png"
import user from "./images/user.png"
import mail from "./images/mail.png"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";








function Signup() {
    const back = process.env.REACT_APP_URL;
console.log(typeof back)
    const url = back + "/users/signup";
    // const url=process.env.REACT_APP_URL;

    // console.log(sessionStorage.getItem("email"));



    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };



        const func = async () => {

            const response = await fetch(url, requestOptions);
            // console.log(response)
            const result=await response.json();
            console.log(result)
            if(result.token){
                navigate("/signin");
            }else{
                alert(result.message);
                navigate("/signin");
            }
            
        }

        func();

    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>signup</title>
                <link rel="canonical" href="/signup" />
            </Helmet>
            <div className="mnb">


                <div className="bm1">

                    <div className="sgn">
                        <div className="bi">
                            <img id="im" src={img} alt="#" />

                        </div>
                        <div className="lp">
                            <div className="hd">
                                <p>Create an Account</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}  >




                                <div className="cred">
                                <div className="us">
                                        <div ><img className="ui" alt="#" src={user} /> </div>
                                        <div ><input className="usr" type="text" {...register("username")} /> </div>
                                    </div>

                                    <div className="eml">
                                        <div ><img className="ui" alt="#" src={mail} /> </div>
                                        <div ><input className="emil" type="email" {...register("email")} /> </div>
                                    </div>

                                    <div className="pwl">
                                    <div  ><img className="ui" alt="#" src={padlock} /> </div>
                                    <div ><input className="pwil" type="password" {...register("password")} /> </div>

                                    </div>
                                </div>

                               
                                <div className="li">
                                    <button id="lbn" type="submit">Sign Up</button>
                                </div>
                               
                                <div className="da" >
                                Already have an account?  <a href="/signin" >Sign In</a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>





        </div>


    );
}

export default Signup;









