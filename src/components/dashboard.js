import Nav from "./navbar1";
import { useState } from "react";
import "../styles/dashboard.css"
import pp from "../images/profilepic.png"
import { useEffect } from "react";


const Dashboard = () => {

    const [info, setinfo] = useState([]);

    const [c, setc] = useState({})





    const url1 = process.env.REACT_APP_URL;
    const email = sessionStorage.getItem("email");


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
            console.log(data.user)

        }
        catch (error) {
            console.log("error in fetching data", error);
        }
    }



    useEffect(() => {
        fetchinfo();

    }, [])

    console.log(c);
    const rt = {};

    const rot = () => {
        rt = {
            rotate: 90,
        }
    }

    return (<>
        <div>


            <Nav />
            <div className="dmb" >

                (<div className="pinfo">
                    <img id="upic" src={pp} alt="#" />
                    <div className="info">Name:   {info.fullName}</div>
                    <div className="info">Email:  {info.email}</div>
                    <div className="info">Amount Left: {info.totalamount}</div>
                </div>)

                <div className="pur">
                    <p className="pch"> Purchased  </p>
                    {info.crypto && Object.entries(c).map(([key, value]) => (
                        <div className="pcinfo" key={key}>
                            {value !== "test" && <div className="pnv ce">
                                {`${key}`}
                            </div>}
                            {value !== "test" && <div className="pnv">
                                &#x20B9;
                                {` ${value}`}
                            </div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>);


}


export default Dashboard;
