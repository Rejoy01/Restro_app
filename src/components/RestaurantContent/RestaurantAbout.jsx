import React from 'react'
import Subheading from '../subheading/Subheading'
import './RestaurntD.css';
import welcome from '../images/welcome.png';
import chef from '../images/chef.png'

const RestaurantAbout = () => {
  return (
    <div className='app_header app__wrapper section_padding app__bg' id='home'>
    <div className="app__wrapper_img">
          <img src={chef} alt="header img" />
    </div>
    <div className="app__wrapper_info">
        <Subheading title="Hear What Our chef says about us "/>
        <h1 className='app__header-h1'>About Us</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt eaque cum ut iste illo quae. Dolorem corporis eos molestiae quae voluptatum perspiciatis obcaecati commodi officiis dignissimos esse, quam libero.</p>
        
    </div>
    
</div>
  )
}

export default RestaurantAbout