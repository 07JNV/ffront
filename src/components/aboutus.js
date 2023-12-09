import "../styles/aboutus.css"
import i2 from "../images/i2.jpg"


const Aboutus = () => {
    return <>
        <div className="aboutus">
            <div className="ahead"><h1>About Stroder</h1></div>

            <div className="aboutusimg">

                <img id="aboutusimg" src={i2} alt="#" />
            </div>
            <div className="acontent">
                <p>  Welcome to Stroder,
                    where innovation meets opportunity
                    in the world of online trading.
                    At Stroder,
                    we're more than just a platform -
                    we're a dedicated team of financial
                    experts and technology enthusiasts
                    passionate about empowering individuals
                    to achieve their financial goals
                    India’s #1 community of share market investors and traders
                </p>
                <p>&#10003; Find out what real share market investors and traders are saying about your stocks right now.</p>
                <p>&#10003; Stroder app has stock specific forums where you can discuss your existing trades </p>
                <p>&#10003; Socialize your trading idea to get more ideas or signals that you might have missed.</p>
                <h3>Our Mission</h3>
                <p>At the heart of Stroder
                    is a commitment to democratize finance.
                    We believe everyone should have access
                    to the tools and resources needed to
                    navigate the financial markets successfully.
                    Our mission is to provide a secure, user-friendly
                    platform that levels the playing field,
                    allowing both seasoned traders and beginners to thrive</p>

            </div>
        </div>
    </>
}


export default Aboutus