import React from 'react'
import mode2 from "../assets/images/mode2.svg"
// import phonea from "../assets/images/phone.png"
import mode1 from "../assets/images/mode1.svg"
import about1 from "../assets/images/about1.svg"
import about2 from "../assets/images/about2.svg"
import about3 from "../assets/images/about3.svg"
import Smartphone from "../assets/images/Smartphone.png"
function About() {
  return (
    <>
    <div className="outerhero hero2o" id='about'> 
        <div className="lefthero">
            <div className="upperlefthero about1h">
                
                
                <h4>SMART HOME</h4>
                
            </div>
            
            <div className="desclefthero about1s">
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Expedita aliquam pariatur,
                    recusandae maxime quis delectus quidem consequuntur
                    error cum fuga nostrum officia distinctio ipsum 
                    quia ab excepturi eos odit vel sapiente sint eaque
                    quam est. Voluptate cupiditate perspiciatis minima
                    in nemo earum. Obcaecati, laudantium saepe dolore
                    nesciunt, qui, natus similique mollitia magnam tempore 
                    in nobis. Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Minus id aliquam optio, possimus iste nisi 
                    fugiat. Impedit laborum esse tempore?</p>
            </div>
            <div className="buttonlefthero bmode">
            
                <button>Read More</button>
                
            </div>
            

        </div>
        <div className="righthero">
            <img src={mode2} style={{width:'30vw'}} alt="" />
        </div>
    </div>
    <div className="outerhero">
        <div className="lefthero">
            <div className="upperlefthero ">
                <h2>MONITOR <br /> HOME <br />REMOTELY</h2>
                
                <p>SMART HOME</p>
            </div>
            <div className="desclefthero">
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nulla?</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis assumenda necessitatibus harum impedit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit suscipit expedita odio sed quibusdam, dolorem doloremque nesciunt officiis porro.</li>
                
                </ul>
            </div>
            <div className="upperlefthero " style={{textAlign:'center'}}>
                <h5>SERVICE </h5>
                
                <h3>012345</h3>
            </div>
            <div className="upperlefthero">
                
                
                
                <div className="sdesclefthero">
                <p>DOWNLOAD AVAILABLE ON</p>
            </div>
            </div>
            <div className="buttonlefthero bac">
                

                <button>ANDORID</button>
               
                


                <button>IOS </button>
               
            </div>

            

        </div>
        <div className="righthero">
            <img src={Smartphone} style={{width:'30vw'}} alt="" />
        </div>
    </div>
    <div className="outerhero hero2o"> 
        <div className="lefthero">
            <div className="upperlefthero about1h">
                
                
                <h4>ABOUT US</h4>
                
            </div>
            
            <div className="desclefthero about1s">
                <p>Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Expedita aliquam pariatur, 
                     recusandae maxime quis delectus quidem consequuntur
                      error cum fuga nostrum officia distinctio ipsum quia
                       ab excepturi eos odit vel sapiente sint eaque quam
                        est. Voluptate cupiditate perspiciatis minima in
                         nemo earum. Obcaecati, laudantium saepe dolore 
                         nesciunt, qui, natus similique mollitia magnam 
                         tempore in nobis. Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Minus id aliquam 
                          optio, possimus iste nisi fugiat. Impedit laborum
                           esse tempore?</p>
            </div>
            <div className="buttonlefthero bmode">
                <div className="perlist">
                    <img src={about1} alt="" />
                    <p>+01 24 5678 91011</p>
                </div>
                <div className="perlist">
                    <img src={about2} alt="" />
                    <p>work@myemail.com</p>
                </div>
                <div className="perlist">
                    <img src={about3} alt="" />
                    <p>Your Address Here</p>
                </div>
            </div>
            

        </div>
        <div className="righthero">
            <img src={mode1} style={{width:'30vw'}} alt="" />
        </div>
    </div>
      
    </>
  )
}

export default About
