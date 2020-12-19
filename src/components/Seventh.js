import React from 'react'
import img1 from '../assets/bus.png'
import img2 from '../assets/asdasd-1.png'
import img3 from '../assets/Layer 4dsasdas.png'
import img4 from '../assets/Group35701.svg'
import arrow from '../assets/arrow-down-sign-to-navigate.svg'
export default function Seventh() {
    return (
        <div className="seventh">
            {/* <div className="plane" >
                <img src={img4} />
            </div> */}
            <div className="sevhead" >
            <h1>Case Studies</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="sevcards" >
                <div className="sevcard" >
                    <img className="cardimg" src={img1} />
                    <div className="sevcardbody" >
                    <h3>Isomorphic Web App</h3>
                    <p>Getting involved matters. Crucial causes to the if ever, come from passive action.</p>
                    <div className="rmore">
                        <h4>Read More</h4><img src={arrow} /><img src={arrow} />
                    </div>
                    </div>
                </div>
                <div className="sevcard" >
                    <img className="cardimg" src={img2} />
                    <div className="sevcardbody" >
                    <h3>Isomorphic Web App</h3>
                    <p>Getting involved matters. Crucial causes to the if ever, come from passive action.</p>
                    <div className="rmore">
                        <h4>Read More</h4><img src={arrow} /><img src={arrow} />
                    </div>
                    </div>
                </div>
                <div className="sevcard" >
                    <img className="cardimg" src={img3} />
                    <div className="sevcardbody" >
                    <h3>Isomorphic Web App</h3>
                    <p>Getting involved matters. Crucial causes to the if ever, come from passive action.</p>
                    <div className="rmore">
                        <h4>Read More</h4><img src={arrow} /><img src={arrow} />
                    </div>
                    </div>
                </div>
            </div>
               <div className="vmore">
                   View More
               </div>
        </div>
    )
}
