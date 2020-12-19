import React, {useState} from 'react'
import bg from '../assets/Path 37452.svg'
import img1 from '../assets/React-icon.svg'
import left from '../assets/109617.svg'
import rt1 from '../assets/Group 35626.svg'
import rt2 from '../assets/Group 35649.svg'
import rt3 from '../assets/Group 35648.svg'
import right from '../assets/109617-1.svg'
import img2 from '../assets/Ellipse 216.png'
export default function Sixth() {
    const [count , setCount ] = useState(0);
    let customer = [
        {
            review : "FIRST REVIEW Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            review : "SECOND REVIEW Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            review : "THIRD REVIEW Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },

    ];
    let len = customer.length;
    return (
        <div className="sixth-p">
            <div className="bg4" >
            <img className="bg4img" src={bg} />
            </div>
            <img className="custpic" src={img2} />
            <div className="dotrec1" >
                <img src={rt2} />
            </div>
            <div className="dotrec2" >
                <img src={rt3} />
            </div>
        <div className="sixth" >
            <div className="cbody" >
            <div style={{display: "flex" , flexDirection: "row"}}>
                   <img src={rt1} /> <h3>Selected Customers</h3>
                </div>
            <h1>Check what our client say about us</h1>
            <p>{customer[count].review}</p>
            <img src={img1} className="ricon" />
            </div>
            <div className="sleft">
                <img onClick={()=> count ? setCount((count-1)%len) : setCount(len-1)} src={right} />
                {/* <p onClick={()=> setCount((count+1)%len)} >NEXT</p> */}
            </div>
            <div className="sright">
                <img src={left} onClick={()=> setCount((count+1)%len)}  />
                {/* <p onClick={()=> count ? setCount((count-1)%len) : setCount(len-1)} >PREV</p> */}
            </div>
        </div>
        </div>
    )
}
