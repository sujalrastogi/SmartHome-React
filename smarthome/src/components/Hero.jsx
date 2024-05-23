import React from 'react'
import home1 from "../assets/images/home1.svg"
function Hero() {
  return (
    <>
    <div className="outerhero">
        <div className="lefthero">
            <div className="upperlefthero">
                <h1>FUTURE <br /> IS NOW</h1>
                
                <p>SMART HOME</p>
            </div>
            <div className="desclefthero">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempora.</p>
            </div>
            <div className="buttonlefthero">
                    
                <button>
                        See More
                        </button>
                        
            </div>

        </div>
        <div className="righthero">
            <img src={home1} style={{width:'30vw'}} alt="" />
        </div>
    </div>
      
    </>
  )
}

export default Hero
