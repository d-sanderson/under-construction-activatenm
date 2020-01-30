import React from 'react';
import ACTIVATE_LOGO from './activate-logo.png';

const MainHeader = ({ text }) => (
  <div style={{height: "50%"}}>
    <img src={ACTIVATE_LOGO} alt={text} title={text} height="100%" />
  </div>
);

export default MainHeader;