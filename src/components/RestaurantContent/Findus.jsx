import React from 'react'
import Subheading from '../subheading/Subheading';
import findus from '../images/findus.png';
const Findus = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
        <Subheading title="Contact"/>
        <h1 className="app__header-h1" style={{marginBottom:'3rem'}}>FindUs</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className='p__cormorant' style={{color:"#DCCA87",margin:'2rem 0'}}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button className='custom__button' style={{marginTop:'2rem'}}>
          Visit Us
        </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={findus} alt="findus" />
    </div>
    
  </div>
  )
}

export default Findus
