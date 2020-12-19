import React from 'react'
import bg from '../assets/Group 35699.svg'
import rt1 from '../assets/Group 35626.svg'
import rt2 from '../assets/Group 35650.svg'
import img1 from '../assets/Group 35698.svg'
import arrow from '../assets/arrow-down-sign-to-navigate.svg'

export default function Second() {
    return (
        <div>
            <div className="dotrec3" >
                <img src={rt2} />
            </div>
            <div className="bg2">
            <img src={bg} className="bg2img" />
            </div>
            <div className="desc2">
                <div className="about" >
                    <img src={rt1} />
                    <p>ABOUT US</p>
                </div>
                <div className="title" >
                    Great Digital Agency
                </div>
                <div className="subtitle" >
                Our products are fully custom-made, built with the latest technologies
                    and cloud-architectures.
                </div>
                <div className="desc2body" >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                <div className="getstarted2" >
                    Get Started  <img src={arrow} className="arrow" />
                    <img src={arrow} className="arrow" />
                </div>
            </div>
            <div className="str" >
                <img src={img1} />
            </div>
        </div>
    )
}
