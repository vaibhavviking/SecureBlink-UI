import React,{useState} from 'react'
import arrow from '../assets/arrow-down-sign-to-navigate.svg'
import bg from '../assets/Path 37452.svg'
import img1 from '../assets/Group 35621.svg'
import img2 from '../assets/Group 35604.svg'
import rt1 from '../assets/Group 35626.svg'
export default function Third() {
    const services = {
        web : {
            title : "Web Development",
            body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            first : "This is the first point",
            second : "This is the second point",
            third : "This is the third point",
            fourth : "This is the fourth point"
        },
        mobile : {
            title : "Mobile Development",
            body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            first : "This is the first point",
            second : "This is the second point",
            third : "This is the third point",
            fourth : "This is the fourth point"
        },
        ui : {
            title : "UI/UX Designing",
            body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            first : "This is the first point",
            second : "This is the second point",
            third : "This is the third point",
            fourth : "This is the fourth point"
        },
        brand : {
            title : "Branding",
            body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            first : "This is the first point",
            second : "This is the second point",
            third : "This is the third point",
            fourth : "This is the fourth point"
        }
    }
    const [serv , setServ] = useState(services.web)
    return (
        <div className="third">
            <div className="tint" >
            </div>
            <div className="bg3">
            <img src={bg} className="bg3img" />
            </div>
            <div className="desc3">
                <div className="about2" >
                   <img src={rt1} /> <p>Our Services</p>
                </div>
                <div className="title2" >
                    Transforming your ideas <br/>
                    into Reality
                </div>
                <div className="desc3body" >
                <div onClick={() => setServ(services.web)} className="sitem" >Web Development</div>
                <div onClick={() => setServ(services.mobile)} className="sitem">Mobile Development</div>
                </div>
                <div className="desc3body" >
                <div onClick={() => setServ(services.ui)} className="sitem">UI/UX Designing</div>
                <div onClick={() => setServ(services.brand)} className="sitem">Branding</div>
                </div>
                </div>
                <div className="servdesc" >
                <img src={img1} /><h1 className="title" >{serv.title}</h1>
                    <div className="body" >
                        {serv.body}
                    </div>
                    <ul className="list" >
                    {/* <img src={img2} /><li>{serv.first}</li> */}
                        <li><img src={img2} /><p>{serv.first}</p></li>
                        <li><img src={img2} /><p>{serv.second}</p></li>
                        <li><img src={img2} /><p>{serv.third}</p></li>
                        <li><img src={img2} /><p>{serv.fourth}</p></li>
                    
                    </ul>
                </div>
            
        </div>
    )
}
