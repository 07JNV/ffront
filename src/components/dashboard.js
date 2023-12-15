import Nav from "./navbar1";
import { useState } from "react";
import "../styles/dashboard.css"
import pp from "../images/profilepic.png"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Dashboard = () => {

    const [info, setinfo] = useState([]);

    const [c, setc] = useState({})


    const url1 = process.env.REACT_APP_URL;
    const email = sessionStorage.getItem("email");

    const navigate = useNavigate();

    useEffect(() => {



        setTimeout(() => {

            if (sessionStorage.length === 0) {
                navigate('/signin');
            }

        }, 1500);

    }, [])



    const fetchinfo = async () => {
        try {
            const url = `${url1}/users/buy?email=${encodeURIComponent(email)}`;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(url, requestOptions);
            const data = await response.json();

            setinfo(data.user);
            setc(data.user.crypto)
            console.log(data.user.crypto)

        }
        catch (error) {
            console.log("error in fetching data", error);
        }
    }








    useEffect(() => {
        fetchinfo();


    }, [])

    console.log(c);

    console.log(info)



    return (<>
        <div>


            <Nav />

            {sessionStorage.length === 0 && (<h1 style={{ textAlign: "center" }}>Please Sign In.......</h1>)}

            {sessionStorage.length > 0 && (<div className="pinfo">
                <img id="upic" src={pp} alt="#" />
                {sessionStorage.length > 0 && (<div className="info">Name:   {info.fullName}</div>)}
                {sessionStorage.length > 0 && (<div className="info">Email:  {info.email}</div>)}
                {sessionStorage.length > 0 && (<div className="info">Amount Left: {info.totalamount}</div>)}
            </div>)}



            {sessionStorage.length && (<div className="mb1">
                <div className="mb1-child">
                    hello
                </div>
                <div className="mb1-child">
                    hello
                </div>
                <div className="mb1-child">
                    hello
                </div>

            </div>)}

            {sessionStorage.length && (<div className="mb2">
                <div className="mb2-child1">

                </div>
                <div className="mb2-child2">

                </div>

            </div>)}
            {sessionStorage.length && (<div className="mb3">
                <div className="mb3-child1">

                </div>
                <div className="mb3-child2">

                </div>

            </div>)}
        </div>
    </>);


}


export default Dashboard;




