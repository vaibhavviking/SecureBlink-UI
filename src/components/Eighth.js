import React from 'react'
import t1 from '../assets/Path 37660.svg'
import img1 from '../assets/Path 37456.svg'
import img2 from '../assets/Group 35686.svg'
import img3 from '../assets/Group 34322.svg'
import img4 from '../assets/Group 34323.svg'
import img5 from '../assets/instagram.svg'
import arrow from '../assets/arrow-down-sign-to-navigate-9.svg'

export default function Eighth() {
    return (
        <div className="eighth">
            <div className="footbg" >
                <img src={img2} />
            </div>
            <div className="invt" >
            <img src={t1} />
            </div>
            <div className="bg5">
            <img src={img1} />
            </div>
            <div className="footer" >
                <div className="foot1" >
                    <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <img src={img3} />
                    <img src={img4} />
                    <img src={img5} />
                </div>
                <div className="foot2" >  
                    <h2>Our Services</h2>
                    <div className="line" ></div>
                    <ul>
                        <li>Web Development</li>
                        <li>Mobile Development</li>
                        <li>Cloud Technologies</li>
                        <li>UI/UX Designs</li>
                    </ul>
                </div>
                <div className="foot3" >  
                    <h2>Our Links</h2>
                    <div className="line" ></div>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy policy</li>
                        <li>Imprint</li>
                        <li>Legal</li>
                    </ul>
                </div>
                <div className="foot4" >  
                    <h2>Our Links</h2>
                    <div className="line" ></div>
                    <ul>
                        <li>Al. Dummyodl 124/23 floor 123 <br/> Banswara Street, 02-577 India</li>
                        <li>00 1800 245 453</li>
                        <li>hello@inkyy.com</li>
                    </ul>
                </div>
            </div>
            <div className="messbox">
                <div className="messbody" >
                <h1>Send Us message</h1>
                <input type="text" placeholder="Your Email*" /><br/>
                <input type="text" placeholder="Your Name" /><br/>
                <input type="text" placeholder="Phone Number*" /><br/>
                <input type="text" placeholder="Subject" /><br/>
                
                <textarea placeholder="Your Message" ></textarea>
                <div className="check">
                <input type="checkbox" />
                <p>By sending this message, you confirm that you have read and agreed to our privacy-policy</p>
                </div>
                <div className="getstarted3" >
                    Get Started  <img src={arrow} className="arrow" />
                    <img src={arrow} className="arrow" />
                </div>
                </div>
            </div>
            
        </div>
    )
}
