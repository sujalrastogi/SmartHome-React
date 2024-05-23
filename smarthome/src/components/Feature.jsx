import React from 'react'
import feature1 from "../assets/images/feature1.svg"
import feature2 from "../assets/images/feature2.svg"
import feature3 from "../assets/images/feature3.svg"

function Feature() {
  return (
    <>
    <div className="outerfeature">
        <div className="perfeature">
            <div className="upperperfeature">
                <img src={feature1} alt="" />
            </div>
            <div className="headingperfeature">
                <h3>SECURITY SYSTEM</h3>
            </div>
            <div className="descperfeature">
                <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Dolorum, dolores <br /> sequi. Facere, alias?</p>
            </div>
        </div>
        <div className="perfeature">
            <div className="upperperfeature">
                <img src={feature2} alt="" />
            </div>
            <div className="headingperfeature">
                <h3>SMART LAMP</h3>
            </div>
            <div className="descperfeature">
                <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Dolorum, dolores <br /> sequi. Facere, alias?</p>
            </div>
        </div>
        <div className="perfeature">
            <div className="upperperfeature">
                <img src={feature3} alt="" />
            </div>
            <div className="headingperfeature">
                <h3>CCTV CONTROL</h3>
            </div>
            <div className="descperfeature">
                <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Dolorum, dolores <br />sequi. Facere, alias?</p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Feature
