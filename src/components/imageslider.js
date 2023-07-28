import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import "./styles/pricing.css"
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';



const ImageSlider = ({ slides }) => {

    const [Index, setIndex] = useState(0);


    const sliderStyles = {
        height: "100%",
        position: "relative",
        borderRadius: "10px"
    };

    const slideStyles = {
        height: "92px",
        width: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        textAlign: "center"


    };

    const leftArrowstyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        left: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",

    }
    const rightArrowstyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        right: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",

    }



    const gotoPrevious = () => {
        const isfirstSlide = Index === 0
        const newIndex = isfirstSlide ? slides.length - 1 : Index - 1;
        setIndex(newIndex);
    }
    const gotoNext = () => {
        const isLastSlide = Index === slides.length - 1;
        const newIndex = isLastSlide ? 0 : Index + 1;
        setIndex(newIndex);
    }




    const [cookies,removeCookie] = useCookies('el');
    
    const em=localStorage.getItem('em');
    console.log("email is"+em); 

    const price = slides[Index].price
    const att = { "email": em, "price": price };


    const [res, setres] = useState({});
    //   removeCookie('email');


    const params = { "email": em};


    const url = process.env.REACT_APP_URL;


    const fetchdata = async () => {
        try {
            const queryParams = new URLSearchParams(params).toString();
           
            const url1=`${url}/users/buy?email=${encodeURIComponent(em)}`;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(url1, requestOptions);
            const data = await response.json();
            console.log(data.user.crypto);
            setres(data.user.crypto);

        }
        catch (error) {
            console.log("error in fetching data", error);
        }
    }




    const navigate = useNavigate();


    const [dep, setDep] = useState(0)

    const buy = async () => {

        if(em){
        const bs = {};

        const name = slides[Index].name;
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
            const response = await fetch(url+`/users/buy`, requestOptions);
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


    
     let content;

     console.log(res);


    if(res.hasOwnProperty(slides[Index].name)){
        content=<p style={{textAlign:"center"}}>purchased</p>
    }else{
    content = <button className="cbtn" onClick={buy} >buy</button>;
       
    }







    return (
        <div style={sliderStyles}>
            <h1 style={leftArrowstyles} onClick={gotoPrevious}><BsFillArrowLeftCircleFill /></h1>
            <h1 style={rightArrowstyles} onClick={gotoNext}><BsFillArrowRightCircleFill /></h1>
            <div style={slideStyles}>
                <img style={{ height: "100%", width: "auto" }} src={slides[Index].iconUrl} alt="#" />
            </div>
            <div className="det">
                <h2>{slides[Index].name}</h2>
                <p>Rank:{slides[Index].rank}</p>
                <p>price: {slides[Index].price}</p>
                {content}
            </div>


        </div>
    );
}




export default ImageSlider;





