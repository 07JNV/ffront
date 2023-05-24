

import {useForm } from "react-hook-form";
import img from "./images/3.png"
import  "./styles/Signup.css"
import jwt_decode from "jwt-decode";
import {useEffect ,useState } from "react";
import { Helmet } from "react-helmet";
import padlock from "./images/padlock.png"
import user from "./images/user.png"



function Signup() {
 
  const url=process.env.BACK_URL;

   function hand(response){
    var ob={};
    console.log(response.credential);
    var userobj =jwt_decode(response.credential);
    console.log(userobj);
    ob={username:userobj.family_name+" "+userobj.given_name,email:userobj.email,password:userobj.sub}

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ob)
  };
  if(Object.keys(ob).length){
      console.log("done")

      const func = async () => {
  
          const response = await fetch(url, requestOptions);
          console.log(ob);
         }

      func();
      return;
  }
     
   }


   
     const {register,handleSubmit,formState:{errors}}=useForm();
     const onSubmit = (data)=> {
      console.log(data);
    
   
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
         };
     const response =  fetch(url, requestOptions);
      
     }

    
   

    return (
        <div >
         
            {/* <div  >
                
                
                <form   onSubmit={handleSubmit(onSubmit)}  > */}
                    {/* <div id="box" >
                    <center > 
                      <div> <h1 style={{color:"white"}}>Sign Up </h1></div>
                       <div><img style={{width:"8vw",height:"10vh",borderRadius:"8px"}}src={img} alt="#"/></div>
                    </center>
                  <center>
                  <div className="mb-3 " style={{margin:"2vh 4vw"}}>
                        <label  style={{color:"white"}}   >UserName</label>
                        <input style={{ width: "80%" }} type="text"  {...register("username")} className="email form-control" />
                    </div>
                  </center>  
                  <center>
                  <div   className="mb-3" style={{ margin: "2vh 4vw"}} >
                     <label   style={{ margin: "10px 0px" ,color:"white" }} >Email </label>
                        <input style={{width: "80%",margin:"10px 0px"}} type="email" {...register("email")} className="email form-control" id="exampleInputPassword1" />
                      </div>
                  </center>
                 
                 <center>
                 <div   className="mb-3" style={{ margin: "1vh 4vw"}} >
                       <label for="exampleInputPassword1" className="form-label" style={{ margin: "10px 0px" ,color:"white"}}  >Password </label>
                        <input style={{width: "80%",margin:"10px 0px"}} type="password" {...register("password")} className="email form-control" id="exampleInputPassword1" />
             
                      </div>
                 </center>
         
                    
                     <center>
                     <button className="btn btn-primary " style={{ margin: "1vh 2vw",width:"50%" }} type="submit">Sign Up</button>
                     </center>
                     <center>
                     <div className="mb-3" style={{margin:"1vh 4vw",color:"white"}}>
                        already have account? <a href="/signin">Sign In </a>
                     </div>
                     </center>
                     <center>
                         <div>
                          or
                         </div>
                     </center>
                     <center>
                     <diV id="signupdiv">

                     </diV>
                     </center>
                
                 
                    </div> */}
                 
                    
                {/* </form>
            </div> */}
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
                            <form onSubmit={handleSubmit(onSubmit)}  >

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
                                    <button id="bn" type="submit">Sign In</button>
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

export default Signup;


