import { useState } from "react";
import { useEffect } from "react";
import "./styles/Crypto.css"
import { useNavigate } from "react-router-dom";

function Crypto() {



    const key = process.env.REACT_APP_KEY;
    const [data, setData] = useState([]);
    const [trend, setTrend] = useState({});

    const [Cryall, setCryall] = useState(false);

    const [Hide, setHide] = useState(false);
    const wid = Hide ? { width: "800px", backgroundColor: "#1b1b1b", color: "white", borderRadius: "10px" } : {};
   







    // fetching api of search trend by people and coin api

    useEffect(() => {

        const fettrend = async () => {
            const url1 = "https://api.coingecko.com/api/v3/search/trending";

            const options1 = {
                method: "GET",
            };

            try {
                const response1 = await fetch(url1);


                const result1 = await response1.json();
                setTrend(result1.coins);
                console.log("trendis", result1)

            } catch (error) {
                console.error(error);
            }

        };
        const fetchDatas = async () => {
            const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": key,
                    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result.data)
                setData(result.data.coins);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDatas();
        fettrend();
    }, [key]);



    // doing buying part


  const url2= process.env.REACT_APP_URL;
  const navigate = useNavigate();

  const [res, setres] = useState({});
  const email =sessionStorage.getItem("email");

  const [dep, setDep] = useState(0)



  const fetchdata = async () => {
    try {
     
       
        const url1=`${url2}/users/buy?email=${encodeURIComponent(email)}`;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(url1, requestOptions);
        const data = await response.json();
    //    console.log(data.user.crypto)
        setres(data.user.crypto);

    }
    catch (error) {
        console.log("error in fetching data", error);
    }
}
  


  

    const handleBuy = async (name,price) => {
        const att = { "email": email, "price": price };
        console.log(name);

        if(sessionStorage.length>0){
        const bs = {};
        Object.assign(bs, { N: name });
        let crypto = {
            ...att,
            ...bs,
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(crypto)
        };


        try {
            const response = await fetch(url2+`/users/buy`, requestOptions);
            const data = await response.json();
            console.log(data);
            setDep(dep+1);

        }
        catch (error) {
            console.log("error in fetching data", error);
        }
    }else{
         navigate('/signin');
    }

 }



 useEffect(() => {
    fetchdata();
}, [dep])





   




    const showAll = () => {
        setCryall(!Cryall);
        setHide(!Hide);
    }




    console.log(Hide)



    return (
        <div className="cmb">
            {!Hide && (<div className="tb">
                <p > Top trending Search</p>
            </div>)}


            {!Hide && (<div className="tc">
                <div className="ctc">

                    {trend.length > 0 ?
                        (<div className="cdetail">
                            <div className="img1">
                                <img id="img1" src={trend[0].item.large} alt="Coin Icon" />
                            </div>
                            <div className="cname">{trend[0].item.symbol} </div>

                            <div className="cprice">&#x20B9; {parseFloat(trend[0].item.price_btc).toFixed(2)} </div>
                        </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)
                    }

                </div>
                <div className="ctc">
                    {trend.length > 0 ?
                        (<div className="cdetail">
                            <div className="img1">
                                <img id="img1" src={trend[1].item.large} alt="Coin Icon" />
                            </div>
                            <div className="cname">{trend[1].item.symbol} </div>

                            <div className="cprice">&#x20B9; {parseFloat(trend[1].item.price_btc).toFixed(2)} </div>
                        </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)
                    }

                </div>
                <div className="ctc">
                    {trend.length > 0 ?
                        (<div className="cdetail">
                            <div className="img1">
                                <img id="img1" src={trend[2].item.large} alt="Coin Icon" />
                            </div>
                            <div className="cname">{trend[2].item.symbol} </div>

                            <div className="cprice">&#x20B9; {parseFloat(trend[2].item.price_btc).toFixed(2)} </div>
                        </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)
                    }

                </div>

            </div>)}


            <div className="eb">
                {!Hide && (<p> Explore coins</p>)}
                {!Hide && (<p style={{ cursor: "pointer", color: "green" }} onClick={showAll}> ALL</p>)}
                {Hide && (<p style={{ cursor: "pointer", color: "blue" }} onClick={showAll}> Hide</p>)}
            </div>

            <ul style={wid}>
                {Hide && data.length > 0 && data.map((item, index) => (
                    <div style={{ display: "flex", flexDirection: "row", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }}>
                        <div style={{ width: "50%", borderBottom: "2px solid white", marginTop: "10px" }}>
                            <img style={{ marginLeft: "10px", marginTop: "10px", height: "58px", width: "auto" }} src={item.iconUrl} alt={item.name} />
                            <p style={{ marginLeft: "10px" }}>{item.symbol}</p>
                            <p style={{ marginLeft: "10px" }} > &#x20B9; {parseFloat(item.price).toFixed(2)}</p>
                        </div>
                        <div style={{ borderBottom: "2px solid white", width: "50%", fontWeight: "200" }}>
                            <p> Rank: {item.rank}</p>
                            <p> Name: {item.name}</p>
                            {!res.hasOwnProperty(item.name)&&<button style={{ borderRadius: "10px", background: "green", cursor: "pointer", height: "40px", width: "100px" }}  onClick={() => handleBuy(item.name, parseFloat(item.price).toFixed(2))}>Buy Now</button>}
                            {res.hasOwnProperty(item.name)&&<p style={{textAlign:"center"}}>purchased</p>}
                        </div>
                    </div>
                ))}
            </ul>


            {!Hide && (<div className="tc">
                <div className="ctc">
                    {data.length > 0 ? (<div className="cdetail">
                        <div className="img1">
                            <img id="img1" alt="Coin Icon" src={data[0].iconUrl} />
                        </div>
                        <div className="cname"> {data[0].symbol} </div>

                        <div className="cprice">&#x20B9; {parseFloat(data[0].price).toFixed(2)}</div>
                    </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)}

                </div>
                <div className="ctc">
                    {data.length > 0 ? (<div className="cdetail">
                        <div className="img1">
                            <img id="img1" alt="Coin Icon" src={data[1].iconUrl} />
                        </div>
                        <div className="cname"> {data[1].symbol} </div>

                        <div className="cprice">&#x20B9; {parseFloat(data[1].price).toFixed(2)}</div>
                    </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)}

                </div>

                <div className="ctc">
                    {data.length > 0 ? (<div className="cdetail">
                        <div className="img1">
                            <img id="img1" alt="Coin Icon" src={data[2].iconUrl} />
                        </div>
                        <div className="cname"> {data[2].symbol} </div>

                        <div className="cprice">&#x20B9; {parseFloat(data[2].price).toFixed(2)}</div>
                    </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)}

                </div>

            </div>)}
        </div>
    );

}


export default Crypto;