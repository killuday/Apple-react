import React from 'react'
import IPhone from "../assets/images/Iphone-14.jpg"
import HodlingIphone from"../assets/images/iphone-hand.png";

const Jumbotron = () => {

   const handleLearnMore=()=>{
   const element= document.querySelector(".sound-section");
   window.scrollTo({
    top: element?.getBoundingClientRect().top,
    left:0,
    behavior:'smooth'
   })
   }

  return (
    <div className='jumbotron-section wrapper'>
        <h2 className="title">
            New
        </h2>
        <img src={IPhone} alt="I Phone 14 Pro" className="logo" />
        <p className="text">Big and Bigger</p>
        <span className="description">From $69/mo. 24 mo or $999 before trade-in </span>
        <ul className="links">
            <li>
                <button className='button'>
                    Buy

                </button>
            </li>
            <li>
                <a  onClick={handleLearnMore} className='link'>Learn More</a>
            </li>
        </ul>
        <img src={HodlingIphone} alt="Iphone" className="iphone-img"  />

    </div>
  )
}

export default Jumbotron