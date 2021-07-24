import React from 'react';
import '../styles/Popup.css';

function Popup(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-content'>{props.children}</div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
