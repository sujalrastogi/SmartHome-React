import React from 'react'
import phone from "../assets/images/phone.svg"
function Hero2() {
  return (
    <>
    <div className="outerhero hero2o">
        <div className="lefthero">
            <div className="upperlefthero">
                
                
                <h4>SMART HOME</h4>
                <div className="sdesclefthero">
                <p>Security System</p>
            </div>
            </div>
            
            <div className="desclefthero">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque animi dolorem non itaque repellat nulla, magni voluptate blanditiis corporis accusamus?</p>
            </div>
            

        </div>
        <div className="righthero">
            <img src={phone} style={{width:'30vw'}} alt="" />
        </div>
    </div>
      
    </>
  )
}

export default Hero2
