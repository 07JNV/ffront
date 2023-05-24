

import React, { useEffect } from 'react';
import '../styles/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import img from "../images/3.png"
import { useNavigate, useLocation } from "react-router-dom";
 
var
  CircularJSON = require('circular-json')


function Slider() {




  const Navigate = useNavigate();




  const ob = { price: 124,email: sessionStorage.getItem('email') };

  
  
  const onsubmit = (ob) => {
   



    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ob)
    };



    const func = async () => {

        const response = await  fetch(`http://localhost:8080/data/buy_sale`,options)
        console.log(response);
        const data = await response.json();
        const success = data.success;
        console.log(data);
        console.log(sessionStorage.getItem('email'));
       
    }

    func();

}

   

  function home (){
   
    Navigate('/');
  }
  home();

  function logout() {
    Navigate('/');

  }

 return (

    <div className='bg-white sidebar'>
      <div className='m-2'>
        <img src={img} alt="#" style={{ width: "60px", height: "50px" }} />
        <span className='brans-name fs-4' style={{ fontFamily: "-moz-initial", fontWeight: "bold" }}>GORISE</span>

      </div>
      <div className='list-group list-group-flush' style={{ border: "1px solid black", borderRadius: "8px",height:"80vh" }}>
        <div>
          <a className='list-group-item py-2' style={{ width: "200px" }}>
            <i className='bi  bi-house fs-4 me-3'></i>
            <span className='fs-5' onClick={home}>HOME</span>
          </a>
        </div>
        <center>
          <div style={{width:"50vw",border:"1px solid black",borderRadius:"8px",backgroundColor:"Tomato"}}>
            <h1 style={{ fontFamily: "sans-serif" }}> {sessionStorage.getItem('name')}</h1>
           <p >{sessionStorage.getItem('email')}</p> 

          </div>
        </center>
       
         <center> <button className='bg-primary' style={{ marginTop: "10px", width: "10vw", borderRadius: "8px" }} onClick={onsubmit}>Sale</button></center>
        <a className='list-group-item py-2' style={{ marginTop: "47vh", width: "200px" }}>
          <i className='bi  bi-power fs-5 me-3'></i>
          <span className='fs-5' onClick={logout}>logout</span>
        </a>
      </div>
    </div>
  );
}

export default Slider;