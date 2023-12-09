import "../styles/homepage.css"
import Footer from "./footer.js"
import Feedback from "./feedback.js"
import invest from "../images/investers.png"
import Nav from "./navbar1.js"
import real from "../images/real.jpg"
import secure from "../images/secure.jpg"
import maximize from "../images/maximize.jpg"
import t4 from "../images/t4.jpg"
import customer from "../images/customer.jpg"
import effort from "../images/effort.jpg"
import Aboutus from "./aboutus.js"



function HomePage() {

    return (
        <div className="bb">
            <Nav />
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

            <div className="top_investers">
                <img id="tinvest" src={invest} alt="#" />
            </div>

            <Aboutus/>




            <div >
                <h1 style={{ textAlign: "center" }}>Why Us!</h1>
                <div className="whyus">
                    <div className="why_us_content">
                        <div className="whyimg">
                            <img id="whyimg" src={secure} alt="#" />
                        </div>
                        <div className="whycontent">
                            <h3>Secure Investments</h3>
                            <p >
                                encryption, two-factor authentication,
                                and other features that ensure the safety of users'
                                investments.
                            </p>


                        </div>
                    </div>
                    <div className="why_us_content">
                        <div className="whyimg">
                            <img id="whyimg" src={effort} alt="#" />

                        </div>
                        <div className="whycontent">
                            <h3>
                                Effortless Trading
                            </h3>
                            <p >
                                the intuitive interface makes trading easy for
                                both beginners and experienced investors.
                                Mention any unique features that set your
                                site apart in terms of user experience.
                            </p>


                        </div>


                    </div>
                    <div className="why_us_content">
                        <div className="whyimg">
                            <img id="whyimg" src={real} alt="#" />

                        </div>
                        <div className="whycontent">
                            <h3>Real-Time Market Insights</h3>
                            <p >
                                Showcase the analytical tools and real-time
                                market data available on your platform.
                                Explain how users can make informed decisions
                                with access to live charts,
                                news updates, and other valuable insights
                            </p>


                        </div>

                    </div>
                    <div className="why_us_content">
                        <div className="whyimg">
                            <img id="whyimg" src={t4} alt="#" />

                        </div>
                        <div className="whycontent">
                            <h3>Diverse Trading</h3>
                            <p >
                                Highlight different asset classes,
                                trading instruments, and markets that users can explore.
                                Emphasize the flexibility your site offers to cater to
                                various trading preferences.
                            </p>


                        </div>

                    </div>
                    <div className="why_us_content">
                        <div className="whyimg">
                            <img id="whyimg" src={maximize} alt="#" />

                        </div>
                        <div className="whycontent">
                            <h3>Maximize Profits</h3>
                            <p >
                                Outline your site's fee structure
                                and how it benefits traders.
                                Convey the message that users can
                                maximize their returns by
                                choosing your trading site.
                            </p>


                        </div>

                    </div>
                    <div className="why_us_content">
                        <div className="whyimg">
                            <img id="whyimg" src={customer} alt="#" />

                        </div>
                        <div className="whycontent">
                            <h3>Customer Support</h3>
                            <p >
                                customer service team and any
                                educational resources provided to users.
                                Share success stories of how your support
                                team has resolved issues promptly,
                                building trust and reliability.
                            </p>


                        </div>

                    </div>

                </div>




            </div>
            {/* <Feedback /> */}
            <Footer />

        </div>
    )
}


export default HomePage