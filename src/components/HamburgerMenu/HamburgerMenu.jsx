import React from 'react';
// styles
import { HamburgerButton, HamburgerButtonMenu } from './styles'

const Hamburger = ({menuToggleHandler, menuOpen}) => {
  
  return (
      <HamburgerButton onClick={menuToggleHandler}>
          <HamburgerButtonMenu menuOpen={menuOpen} />
      </HamburgerButton>
  )
};

export default Hamburger;
