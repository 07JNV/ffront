import { useState } from "react";
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";

const Stocks = ({ slides }) => {
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
        textAlign:"center"
        // backgroundImage:`url(${slides[Index].iconUrl})`,

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
    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",

    }

    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "80px",
        color: "black"
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

    const gotoslide = (slideIndex) => {
        setIndex(slideIndex);

    }
    return (
        <div style={sliderStyles}>
            <h1 style={leftArrowstyles} onClick={gotoPrevious}><BsFillArrowLeftCircleFill/></h1>
            <h1 style={rightArrowstyles} onClick={gotoNext}><BsFillArrowRightCircleFill/></h1>
            <div style={slideStyles}>
                <img style={{ height: "100%", width: "auto"}} src={slides[Index].iconUrl} />
            </div>
            {/* <div style={dotsContainerStyles}>
                {slides.map((slide,slideIndex)=>(
                    <div key={slideIndex} style={dotStyles} onClick={()=>gotoslide(slideIndex)}>.</div>
                ))}
            </div> */}
        </div>
    );
}

export default Stocks;


