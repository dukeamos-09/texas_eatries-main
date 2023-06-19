import React from 'react'

import images from "../../constant/images";

const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom: '2rem'}}>
      <p>{title}</p>
      <img src={images.burger} alt='burger' className='burger__img' />
    </div>
  )
}

export default SubHeading;