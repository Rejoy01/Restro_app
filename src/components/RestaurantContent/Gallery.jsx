import React from 'react'
import './Gallery.css';
import {BsInstagram , BsArrowLeftShort , BsArrowRightShort} from 'react-icons/bs'
import gallery01 from '../images/gallery01.png';
import gallery02 from '../images/gallery02.png';
import gallery03 from '../images/gallery03.png';
import gallery04 from '../images/gallery04.png';
import Subheading from '../subheading/Subheading';

const Gallery = () => {

    const galleryImages = [gallery01, gallery02, gallery03, gallery04]
    const scrollref = React.useRef(null)
    const scroll =(direction)=>{

        const{current} = scrollref
        
        if(direction ==='left'){
          current.scrollLeft -=300
        }else{
          current.scrollLeft +=300
        }
    }
  return (
    <div className='app__gallery flex_center'>
    <div className='app__gallery-content'>
      <Subheading title="Instagram" />
      <h1 className='app__header-h1'>Photo Gallery</h1>
      <p className="p__opensans" style={{color:'#AAA', marginTop:'3rem'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum natus, tenetur quidem aperiam iusto, dicta sapiente quo, aliquid dolores dignissimos! Quae animi neque veniam, dolorum assumenda alias voluptate et?
      </p>
      <button type='button' className='custom__button'>Know More</button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollref}>
        {galleryImages.map((image,index)=>
          <div className='app__gallery-images_card flex__center' key={`gallery_images-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>
          </div>
        )}
      </div>
      <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')}/>
      </div>

    </div>
  </div>
  )
}

export default Gallery