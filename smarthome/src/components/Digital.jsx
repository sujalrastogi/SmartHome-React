import React from 'react'
import card1 from "../assets/images/card2.png"
import card2 from "../assets/images/card1.png"
import card3 from "../assets/images/card3.png"

function Digital() {
  return (
    <div className="outerfeature digi" id='digi'>
        <div className="perfeature box1">
           <img src={card1} alt="" />
        </div>
        <div className="perfeature box1">
            <img src={card2} alt="" />
            
        </div>
        <div className="perfeature box1">
            <img src={card3} alt="" />
           
        </div>
    </div>
  )
}

export default Digital
