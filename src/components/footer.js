

import "./styles/Footer.css"
import cl from "./images/cl.jpg"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import social from "./images/social.png"

import twitter from "./images/twitter.png"

function Footer() {

    return (
        <footer className="footer">
            <div className="cfooter">
                <div className="comname">
                    Stroder
                </div>
                <div>
                    <p style={{textAlign:"center",marginTop:"60px"}}>
                        Follow Us On
                    </p>
                    <div className="socialmedia">
                        <img src={facebook} id="sicons" alt="#" />
                        <img src={instagram} id="sicons" alt="#" />
                        <img src={twitter} id="sicons" alt="#" />
                        <img src={social} id="sicons" alt="#" />
                    </div>
                </div>
            </div>
            <div className="aboutcontent">
                ABOUT
                STRODER

            </div>
            <div className="content">
                India’s #1 community of share market investors and traders: Find out what real share market investors and traders are saying about your stocks right now. Stroder app has stock specific forums where you can discuss your existing trades or your planned future trade with fellow stock market traders. Socialize your trading idea to get more ideas or signals that you might have missed. Discuss outlook in stock specific forums and keep a tab on news that is moving the Indian stock & commodities markets.
                Financial Content Disclaimer: The content provided on Stroder is for informational purposes only and does not constitute financial advice, endorsement, analysis, or recommendations. The content is primarily user-generated and reflects the personal opinions and experiences of Stroder community members. We strongly advise our users to conduct their own research or consult with a qualified financial advisor before making any financial decisions. Stroder does not guarantee the accuracy, timeliness, or completeness of any information provided by our users and will not be held responsible for any decision made based on such information. It's essential for users to approach financial discussions and decisions with caution and skepticism. Avoid any financial strategies or investments that promise unrealistically high returns or sound too good to be true. Always ensure that any financial decision aligns with your personal financial situation, goals, and risk tolerance. We do not assume any liability with respect to any loss or damage, arising directly or indirectly due to any inaccuracy or incompleteness of any information or a breach of any warranty or guaranty due to the actions of any user of the Platform. Please read our Content Policy and Terms of Use to understand more.


            </div>
            <div className="mdwl">
                Made with 	&#10084; in India
            </div>
        </footer>
    )



}

export default Footer;