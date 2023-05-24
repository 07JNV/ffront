import img from "./images/5.png"

function About(){
return (
    <div style={{margin:"auto",width:"745px" ,height:"581px",border:"1px solid black",borderRadius:"8px",backgroundImage:`url(${img})`,backgroundSize:"cover"}}>
         {/* <img src={img} alt=""/> */}
            <center>
                <h1 style={{fontFamily:"sans-serif"}}>
                    ABOUT US
                </h1>
            </center>
            <center>
                <p>
                    we the teamates of devbits team our team name i

                </p>
            </center>
           
    </div>
)
  


}

export default About;