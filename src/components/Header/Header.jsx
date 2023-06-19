import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import images from "../../constant/images";
import './Header.css';

const Header = () => {
  return (
    <div className='app__header  app__wrapper  section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='A Trial will Convince You'/>
        <h1 className='app__header-h1'>What a Great Taste? Take A Happy Bite!!!</h1>
        <p style={{ margin: '1rem' }}>Come and Dine at Texas Bite to experience a Great Treat and enjoy our Delicious Texacious meals</p>
        <button type='button'  className='custom__button'>Explore More</button>
      </div>
      
      <div className='app__wrapper_img'>
        <img src={images.salad} alt='header img' />

      </div>

    </div>
  )
};

export default Header