

import {useForm } from "react-hook-form";
import img from "./images/3.png"
import  "./styles/Signup.css"
import jwt_decode from "jwt-decode";
import {useEffect ,useState } from "react";

const link = "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css";
const integrity = "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u";

function Signup() {
 
  const url="http://localhost:8080/register";

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


  useEffect(() => {
    /*global google*/
         google.accounts.id.initialize({
            client_id:"51985049198-e5urge217oqmlpudtnlmtot3jo5g9e3l.apps.googleusercontent.com",
            callback:hand
         });

         google.accounts.id.renderButton(
            document.getElementById("signupdiv"),
            {theme:"outline",size:"large"}
         )
    },[]);
   
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
            <link rel="stylesheet" href={link} integrity={integrity} crossorigin="anonymous" />
            <div  >
                <form   onSubmit={handleSubmit(onSubmit)}  >
                    <div id="box" >
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
                
                 
                    </div>
                 
                    
                </form>
            </div>
        </div>

    );
}

export default Signup;


