import React from 'react'
import union1 from '../assets/Union 1.svg'
import ellipse223 from '../assets/Ellipse 223.svg'
import t1 from '../assets/Path 37488.svg'
import t2 from '../assets/Path 37486.svg'
import t3 from '../assets/Path 37467.svg'
import t4 from '../assets/Path 37502.svg'
import t5 from '../assets/Path 37501.svg'
import t6 from '../assets/Path 37485.svg'
import t7 from '../assets/Path 37484.svg'
import t8 from '../assets/Path 37490.svg'
import t9 from '../assets/Path 37458.svg'
import t10 from '../assets/Path 37459.svg'
import t12 from '../assets/Path 37488.svg'
import t13 from '../assets/Path 37483.svg'
import t14 from '../assets/Path 37482.svg'
import arrow from '../assets/arrow-down-sign-to-navigate-10.svg'

export default function First() {
    return (
        <div className="blue">
            <div className="rocket" >
            <img src={union1}/>
            </div>
            <div className="ellipse" >
            <img src={ellipse223} />
            </div>
            <div className="navbar" >
                <div>
            <h1 className="logo" >LOGO</h1>
                </div>
                <div>
            <h1 className="navitems" >About</h1>
                </div>
                <div>
            <h1 className="navitems">Services</h1>
                </div>
                <div>
            <h1 className="navitems" >Case Studies</h1>
                </div>
                <div>
            <h1  className="navitems" >Testimonials</h1>
                </div>
                <div>
            <h1  className="navitems" >Contact</h1>
                </div>
                <div>
            <h1  className="navitems login" >Login</h1>
                </div>

            </div>
            <div className="desc" >
                <div className="descheader" >
                Web Design<br/> 
                Web Development<br/>
                by SB
                </div>
                <div className="descdesc" > 
                    Our products are fully custom-made, built with the latest technologies<br/>
                    and cloud-architectures.
                </div>
                <div className="getstarted1" >
                    Get Started  <img src={arrow} className="arrow" />
                    <img src={arrow} className="arrow" />
                </div>
            </div>
            <div className="t1" >
            <img src={t1} className="t1img" />
            </div>
            <div className="t2" >
            <img src={t2} className="t2img" />
            </div>
            <div className="t3" >
            <img src={t3} className="t3img" />
            </div>
            <div className="t4" >
            <img src={t4}/>
            </div>
            <div className="t5" >
            <img src={t5}/>
            </div>
            <div className="t6" >
            <img src={t6}/>
            </div>
            <div className="t7" >
            <img src={t7}/>
            </div>
            <div className="t8" >
            <img src={t8}/>
            </div>
            <div className="t9" >
            <img src={t9}/>
            </div>
            <div className="t10" >
            <img src={t10}/>
            </div>
            <div className="t11" >
            <img src={t8}/>
            </div>
            <div className="t12" >
            <img src={t12}/>
            </div>
            <div className="t13" >
            <img src={t13}/>
            </div>
            <div className="t14" >
            <img src={t14}/>
            </div>
        </div>
    )
}


