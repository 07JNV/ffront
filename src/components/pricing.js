
import { useEffect, useState } from "react";
import Chart from "./chart";
import "./styles/pricing.css"
import im1 from "./images/load.png"
import im2 from "./images/4.png"
import im3 from "./images/5.png"
import ImageSlider from "./imageslider"

import Stocks from "./imageslider"
import { Helmet } from "react-helmet";



export default function Pricing() {


  const [slides, setdata] = useState([{ iconUrl: im1}]);
   
  const key=process.env.REACT_APP_KEY;

  useEffect(() => {
    const fetchDatas = async () => {
      const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
     
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
          }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data.coins);
         setdata(result.data.coins);
      } catch (error) {
        console.error(error);
      }

    };

    fetchDatas();

  }, []);
 



  const containerstyle = {
    width: "400px",
    height: "550px",
    margin: "0 auto",
    borderRadius: "10px",
    fontFamily: "Arial, Helvetica, sans-serif",
    borderRight: "solid rgb(89, 145, 125) 5px",
    borderLeft: "solid  rgb(89, 145, 125) 5px",
  }


  return (
    <div >
      <Helmet>
        <meta charSet="utf-8" />
        <title>pricing</title>
        <link rel="canonical" href="/pricing" />
      </Helmet>
      <p style={{ fontSize: "25px", fontFamily: "Arial, Helvetica, sans-serif" }}>Pricing</p>
      <div className="mb1_p">
        <div className="c1">
          <h1>cryptocurrencies</h1>
          <ImageSlider slides={slides} />
        </div>
        {/* <div className="c2">
          <h1>Stocks</h1>
          <Stocks slides={slides} />
        </div> */}
      </div>
      <div className="mb2_p">
        &#169;All right reserved 2023
      </div>

    </div>
  );


}




