import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import data from '../../constant/data';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className='app__specialmenu flex__center section__padding' id='home'>
      <div className='app__specialmenu-title'>
        <SubHeading title='Delicious Appetising Menu' />
        <h1>SPECIAL MENU</h1>
      </div>

      <div className='app__specialmenu-menu'>
        <div className='app__specialmenu-menu_meal flex__center'>
          <p className='app__specialmenu-menu_heading'>meals</p>
          <div className='app__specialmenu-menu_items'>
            {data.map((data, index) => (
              <p key={index}>{ data.title }</p>
            ))}

          </div>

        </div>

      </div>
    </div>
  )
}

export default SpecialMenu;