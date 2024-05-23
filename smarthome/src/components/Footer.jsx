import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="purplecontainer paddings" >
        {[1, 2, 3,4].map((index) => (
          <div key={index} className="perpurplecontainer">
            <div className="purpleheading">
              <h3>ABOUT </h3>
            </div>
            {index === 1 ? (
              <div className="purplepara">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius nihil iusto officiis
                  expedita eos pariatur, unde beatae amet suscipit fugiat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, eaque.
                </p>
              </div>
            ) : (
              <div className="purplelist">
                <ul>
                  <li>
                    Lorem Ipsum
                    </li>
                  <li>
                    Lorem Ipsum
                    </li>
                  <li>
                    Lorem Ipsum
                    </li>
                  <li>
                    Lorem Ipsum
                    </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
        <hr className='linepu' />
        <hr className='linepi' />

    </>
  );
};

export default Footer;
