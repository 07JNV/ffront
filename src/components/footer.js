

import "./styles/Footer.css"
import cl from "./images/cl.jpg"

function Footer(){



return (<footer style={{ backgroundColor: "#1b1b1b", color: "white" ,marginTop:"40px"}}>
<div className="cfooter">
    <div style={{ marginLeft: "40px",marginTop:"20px" }}>
        <img style={{ height: "60px", width: "auto" }} src={cl} alt="#" />
    </div>
    <div>
        <p>
            About us
        </p>
        <p>
            Contact us
        </p>
        <p>
            Help & Support
        </p>
    </div>
</div>
<div className="cfooter" style={{ textAlign: "center", marginTop: "20px", width: "100%",marginLeft:"20px" }}>
&#169; all right reserved 2016-2023, Built with   &#10084; in India
</div >

<div style={{ width: "100%", height: "40px" }}>

</div>
</footer>);

}

export default Footer;