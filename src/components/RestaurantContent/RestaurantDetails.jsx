import React from 'react'
import Subheading from '../subheading/Subheading'
import './RestaurntD.css';
import { Button } from 'react-bootstrap';
import welcome from '../images/welcome.png';


const RestaurantDetails = () => {
  return (
    <div className='app_header app__wrapper section_padding app__bg' id='home'>
        <div className="app__wrapper_info">
            <Subheading title="chase the new flavour"/>
            <h1 className='app__header-h1'>The Key to Fine Dining</h1>
            <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt eaque cum ut iste illo quae. Dolorem corporis eos molestiae quae voluptatum perspiciatis obcaecati commodi officiis dignissimos esse, quam libero.</p>
            <button className='custom__button' >Explore more </button>
        </div>
        <div className="app__wrapper_img">
              <img src={welcome} alt="header img" />
        </div>
        
    </div>
    
  )
}

export default RestaurantDetails