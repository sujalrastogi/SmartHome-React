import React from 'react'
import logo from "../assets/images/logo.svg"
import icon1 from "../assets/images/Instagram.svg"
import icon2 from "../assets/images/Facebook.svg"
import icon3 from "../assets/images/Twitter.svg"
import icon4 from "../assets/images/WhatsApp.svg"
function Navbar() {
  return (
    <>
    <header>
        <nav>
            <div className="leftnav" id='nav'>
                <div className="leftleftnav">
                    <img src={logo} alt="" />
                </div>
                <div className="rightleftnav">
                    <ul>
                        <li>Home</li>
                        <li>
                            <a href="#about">

                            About
                            </a>
                            </li>
                        <li>
                            <a href="#mode">
                                Access Control
                                </a>
                                </li>
                        <li>
                            <a href="#digi">

                            Digital
                            </a>
                            </li>
                    </ul>
                </div>

            </div>
            <div className="rightnav">
                <div className="leftrightnav">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="rightrightnav">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                </div>

            </div>
        </nav>
    </header>
      
    </>
  )
}

export default Navbar
