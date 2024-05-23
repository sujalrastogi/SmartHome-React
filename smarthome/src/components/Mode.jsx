import React from 'react'
import mode1 from "../assets/images/mode1.svg"
import mode2 from "../assets/images/mode2.svg"
import mode3 from "../assets/images/mode3.svg"

function Mode() {
  return (
    <>
    <div className="modeheading" id='mode'>
        <h1>SECURITY MODE TYPE</h1>
    </div>
    <div className=" outermode">

        <div className="perfeature permode">
            <div className="upperperfeature modei">
                <img src={mode1} alt="" />
            </div>
            <div className="headingperfeature">
                <h3>TYPE A</h3>
            </div>
            <div className="descperfeature descmode">
                <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Dolorum, dolores <br /> sequi. Facere, alias?</p>
            </div>
            <div className="buttonlefthero bmode">
                

                <button>See More</button>
               
            </div>
        </div>
        <div className="perfeature permode">
            <div className="upperperfeature modei">
                <img src={mode2} alt="" />
            </div>
            <div className="headingperfeature">
                <h3>TYPE B</h3>
            </div>
            <div className="descperfeature descmode">
                <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Dolorum, dolores <br /> sequi. Facere, alias?</p>
            </div>
            <div className="buttonlefthero bmode">
            


                <button>See More</button>
           
            </div>
        </div>
        <div className="perfeature permode">
            <div className="upperperfeature modei">
                <img src={mode3} alt="" />
            </div>
            <div className="headingperfeature">
                <h3>TYPE C</h3>
            </div>
            <div className="descperfeature descmode">
                <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Dolorum, dolores <br />sequi. Facere, alias?</p>
            </div>
            <div className="buttonlefthero bmode">
            


                <button>See More</button>
            
            </div>
        </div>
    </div>
    <div className="modedesclast">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Consectetur eaque quod facere repellat ipsam nobis distinctio perspiciatis
             praesentium fuga, cum quidem pariatur atque optio. Laboriosam quam delectus
              harum inventore laudantium, eligendi incidunt, veritatis perspiciatis voluptatum 
              suscipit et explicabo temporibus, reprehenderit minima. Ullam, accusamus quae veniam 
              amet quibusdam repellendus rem animi.</p>
    </div>
      
    </>
  )
}

export default Mode
