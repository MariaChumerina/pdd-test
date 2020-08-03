import React from 'react';
import './HeaderDummy.css';

/*
Header dummy is a component that fakes the real header (that is fixed-top)
in order to 'move' the markup of the page down on a size, that equals <Header>'s height
 */
export default function HeaderDummy() {
  return (
      <div id='top'>
        <div className='header-rectangle'/>
      </div>
  );
}