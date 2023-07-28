import "./styles/dash.css"
import { useEffect, useState } from "react";
import img from "./images/u.png"
import { useCookies } from 'react-cookie';
import { Link,useNavigate } from 'react-router-dom';
import {Home,Shopping,Logout} from '@icon-park/react';

function Dash(){

    const back=process.env.REACT_APP_URL;
    const url=back+"/users/buy"

    const [cookies, removeCookie]= useCookies(['email']);

  const navigate=useNavigate();

    const params = { "email": cookies.email };
    const [res,setRes]=useState({});
    const fetchdata = async () => {
        try {
            const queryParams = new URLSearchParams(params).toString();
            const url1 = url+`?${queryParams}`;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(url1, requestOptions);
            const data = await response.json();
            console.log(data.user);
            setRes(data.user);

        }
        catch (error) {
            console.log("error in fetching data", error);
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])

    let im;
    
        im=img;

    const handleLogout = () => {
        // removeCookie('email', { path: '/' });
        // removeCookie('el', { path: '/pricing' });
        window.localStorage.removeItem('em');
        navigate('/');

      };

    return (
        <div>
        <div className="na">
        <div className="nv">
        <nav>
      <ul>
        <li>
          <Link style={{color:"black"}} to="/"><Home theme="filled" size="32" fill={['#333' ,'#2F88FF']}/></Link>
        </li>
        <li style={{marginTop:"20px"}}>
          <Link style={{color:"black"}} to="/pricing"><Shopping theme="outline" size="32" fill="#333"/></Link>
        </li>
      </ul>
    </nav>
    </div>

    <div >
             <button className="lo" onClick={handleLogout}><Logout theme="outline" size="32" fill="#333"/></button>
    </div>
        </div>
            <div className="user">
            <div >
                <img  className="pic"  src={im} alt="#"/>/
            </div>

               <p style={{fontSize:"24px"}}>{params.email}</p>
               <p>Username :  {res.fullName}</p> 
               <p>Balanceleft : {res.totalamount}</p> 
            </div>
            <div>
             <p style={{textAlign:"center",fontSize:"30px"}}>Purchased Items</p>
             <div  className="pi">
             {/* {Object.entries(res.crypto).map(([key, value]) => (
                <div >{key}</div>
             ))} */}
             {/* {res} */}
             </div>
            </div>
            
        </div>
    );
}


export default Dash;

// const myArray = ['Element 1', 'Element 2', 'Element 3'];

// {myArray.map((element, index) => (
//     <div key={index} className="box">
//       {element}
//     </div>
//   ))}



// const myObject = {
//     key1: 'Value 1',
//     key2: 'Value 2',
//     key3: 'Value 3'
//   };




// {Object.entries(myObject).map(([key, value]) => (
//     <div key={key} className="box">
//       <span className="key">{key}: </span>
//       <span className="value">{value}</span>
//     </div>
//   ))}