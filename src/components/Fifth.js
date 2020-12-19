import React from 'react'
import img1 from '../assets/React-icon.svg'
import img2 from '../assets/Amazon_Web_Services_Logo.svg'
import img3 from '../assets/Mask Group 1.svg'
import img4 from '../assets/redux-logo.svg'
import img5 from '../assets/Path 37519.svg'
import img6 from '../assets/g10.svg'
import img7 from '../assets/Amazon_Web_Services_Logo-1.svg'
import img8 from '../assets/Mask Group 3.svg'
import img9 from '../assets/_Path_3.svg'
import img10 from '../assets/Group 35700.svg'
export default function Fifth() {
    return (
        <div className="fifth" >
            <div className="desc4head" >  
                <h1>Core Technologies</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="ddm" >
                <p className="br" >Design</p>
                <p className="br" >Development</p>
                <p>Marketing</p>
            </div>
            </div>
            <div className="tech" >
                <div className="frow" >
                <img src={img1} />
                <img style={{backgroundColor : "#0e77ff"}} src={img2} />
                <img src={img3} />
                <img src={img4} />
                <img src={img5} />
                <img src={img6} />
                <img src={img7} />
                </div>
                <div className="srow" >
                <img src={img6} />
                <img src={img4} />
                <img src={img8} />
                <img src={img9} />
                <img src={img1} />
                <img src={img5} />
                </div>
            </div>
            <div className="ftr" >
                <img src={img10} />
            </div>
        </div>
    )
}
