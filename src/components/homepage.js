import "./styles/homepage.css"
import Footer from "./footer.js"
import Navbar from "./navbar.js"
import Feedback from "./feedback.js"





function HomePage() {
    
    return (
        <div className="bb">
        <Navbar/>
            <div className="fb">
                <div className="fcfb">Every stock needs a stroder</div>
                <div className="scfb"> <img id="scfb" src="https://front.page/assets/4805b78b.webp" /></div>
            </div>

            <div className="sb">
                <div className="pfsb">Connect with 
                India's Fastest Growing Trading Site</div>
                <div>Browse thousands of trades , charts ,discussions, insights.</div>
                <a href="pricing"><button id="pbtn">View Pricing</button></a>
            </div>

            
             <div className="tb">
             <div className="fbtb">
                       Backed By Top Investers And Founders
                    
             </div>


             


        

             </div>

           
             <div className="fb">
             

             </div>
             <div className="ffb">
             <Feedback/>

             </div>
             <div className="sxb">

             </div>
             <div className="svb">

            
            

             </div>
             <Footer/>
            
        </div>
    )
}


export default HomePage