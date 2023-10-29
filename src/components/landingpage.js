
import img from "./images/ff.jpg"
import img1 from "./images/3026.jpg"
import img2 from "./images/fs.jpg"
import lock from "./images/padlock.png"
import la from "./images/la.png"
import "./styles/home.css"
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Helmet} from "react-helmet";
import { SocialIcon } from 'react-social-icons';
import Footer from "./footer.js"
import Navbar from './navbar';






function Home() {
useEffect(() => {
        AOS.init();
      }, [])
    
    return (

        <div >

            <Helmet>
                <meta charSet="utf-8" />
                <title>home</title>
                <link rel="canonical" href="/home" />
            </Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <Navbar/>




            <div className="mb1">
                <div className="p1">
                    <p>Connect With India's No.1 Trading Site Globally</p>
                    <div>
                        <p id="st">
                            the website you need to trust
                        </p>
                    </div>
                    <div >
                      <a href="signin">
                      <button id="btn"  >
                              Sign in >
                        </button>
                      </a>  
                      <a href="signup">
                      <button id="btn"  >
                              Sign Up >
                        </button>
                      </a>
                     
                    </div>
                </div>
                <div className="v1">

                    
                </div>
            </div>



            <div className="mb2" >
                || Join More Than 15 million users  Globally||
            </div>



            <div className="mb3"  data-aos-anchor-placement="top-center"  >
                <div className="p3"  data-aos="fade-right"   >
                    <img id="i1" src={img} alt="#" />
                    
                </div>
                <div className="d3" data-aos="fade-left"   >
                    <p>
                        Grab your deposit bonus and get a head start on your
                        trading journey when you join Gorise. Simply opt-in
                        and fund your account to be eligible.
                    </p>
                    <div>
                        <button id="btn">
                            Sign Up Now >
                        </button>
                    </div>
                </div>
            </div>


            <div className="mb4" data-aos-anchor-placement="top-center">
                <div className="d4" data-aos="fade-right"  >
                    <p>
                        Grab your deposit bonus and get a head start on your
                        trading journey when you join Gorise. Simply opt-in
                        and fund your account to be eligible.
                    </p>
                </div>
                <div className="p4" data-aos="fade-left" >
                    <img id="i2" src={img1} alt="#" />
                    
                </div>
            </div>


            <div className="mb5" data-aos-anchor-placement="top-center">
                <div className="p5 " data-aos="fade-right"  >
                    <img id="i3" src={img2} alt="#" />
                    
                </div>
                <div className="d5" data-aos="fade-left"   >
                    <p>
                        Grab your deposit bonus and get a head start on your
                        trading journey when you join Gorise. Simply opt-in
                        and fund your account to be eligible.
                    </p>
                </div>
            </div>
            <div className="mb6" data-aos="fade-up" data-aos-anchor-placement="top-center">
            
             <div >
             <p className="d6">
             Zero roadblocks to start 
             </p>
             
              <p  className="sl">
              &#8377;0 account opening and maintainence charges
              </p>           
               </div>
            
               <div className="btn2" >
               <a href="pricing"  ><button id="bn">view pricing</button></a>  
               </div>
               <div className="btn3" >
                 <a href="signup" > <button id="bn1">Get started </button></a>
               </div>
            </div>
            <div className="mb7" data-aos="fade-up" data-aos-anchor-placement="top-center">
                 <div className="l" >
                 <img id="lk" src={lock} alt="#" />
                 </div>
                 <div className="k" >
                 <p className="sc"> secure your money with our most trusted site</p>
                 </div>
            </div>
            <div className="mb8">
                   <div className="p8" data-aos="fade-right">
                  <img id="la" src={la} alt="#"/>
                   </div>
                   <div className="d8" data-aos="fade-left" >
                       <p id="d8">manage and monitor all devices that are logged into your  account remotly</p>
                   </div>
            </div>
            <div className="mb9"  data-aos="fade-up" data-aos-anchor-placement="top-center" >
                  <div className="p9">
                            <p id="p9">open your account in 1 minute</p>
                  </div>
                  <div className="btn3" >
                 <a href="signup" ><button id="sg">Sign up ></button></a> 
               </div>
            </div>
              
               <Footer/>
        </div>
    );
}



export default Home;