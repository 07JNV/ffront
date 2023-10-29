// import { useState } from "react";
// import "./styles/Stokes.css"
// import { useEffect } from "react";

// function Crydetail(){
//     const key = process.env.REACT_APP_KEY;
//     const [data, setData] = useState({});


//     useEffect(() => {
//         const fetchDatas = async () => {
//             const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

//             const options = {
//                 method: 'GET',
//                 headers: {
//                     'X-RapidAPI-Key': key,
//                     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//                 }
//             };

//             try {
//                 const response = await fetch(url, options);
//                 const result = await response.json();
//                 // console.log(result);
//                 setData(result.data.coins);
//             } catch (error) {
//                 console.error(error);
//             }

//         };

//         fetchDatas();

//     }, []);

//     return 
//     (
//         <div className="smb">


//         <div className="csb">
//             {data.length > 0 ?
//                 (<div className="cdetail">
//                     <div className="img1">
//                         <img style={{ marginLeft: "10px", marginTop: "10px", height: "58px", width: "auto" }} src={data[0].iconUrl} alt="Coin Icon" />
//                     </div>
//                     <div className="cname">{data[0].name} </div>
                    
//                     <div className="cprice">&#x20B9; {parseFloat(data[0].price).toFixed(2)} </div>
//                 </div>)
//                 : (<div className="mloader">
//                     <p className="loader">
//                     </p>
//                 </div>)
//             }
//         </div>
//         <div className="csb">
//         {data.length > 0 ?
//                 (<div className="cdetail">
//                     <div className="img1">
//                         <img style={{ marginLeft: "10px", marginTop: "10px", height: "58px", width: "auto" }} src={data[1].iconUrl} alt="Coin Icon" />
//                     </div>
//                     <div className="cname">{data[1].name} </div>
//                     <div className="cprice">&#x20B9; {parseFloat(data[1].price).toFixed(2)} </div>
//                 </div>)
//                 : (<div className="mloader">
//                     <p className="loader">
//                     </p>
//                 </div>)
//             }
//         </div>
//         <div className="csb">
//         {data.length > 0 ?
//                 (<div className="cdetail">
//                     <div className="img1">
//                         <img style={{ marginLeft: "10px", marginTop: "10px", height: "58px", width: "auto" }} src={data[2].iconUrl} alt="Coin Icon" />
//                     </div>
//                     <div className="cname">{data[2].name} </div>
//                     <div className="cprice">&#x20B9; {parseFloat(data[2].price).toFixed(2)} </div>
//                 </div>)
//                 : (<div className="mloader">
//                     <p className="loader">
//                     </p>
//                 </div>)
//             }
//         </div>

//     </div>

//     );
// }


// export default Crydetail;