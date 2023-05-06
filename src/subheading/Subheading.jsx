import React from 'react'

import spoon from '../images/spoon.png'

const Subheading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>
        <p className="p__cormorant" style={{color:"white"}}>{title}</p>
        <img src={spoon} alt="spoon" className='spoon__img' />
    </div>
  )
}

export default Subheading