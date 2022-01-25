// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// state
import { uiActions } from "../../app/slices/uiSlice";
// tools
import { Link } from 'react-router-dom';
// logo
import logo from '../../images/logo.png'
// components
import { HamburgerMenu, ThemeToggleButton } from '../index'
// styles
import {
  NavbarContainer,
  NavbarLeftSection,
  NavbarLogo,
  NavbarRightSection,
  NavbarMenu,
  NavbarItem
} from './styles'

const Navbar = () => {
  const dispatch = useDispatch()
  const {menuOpen} = useSelector((state) => state.ui)
  const menuToggleHandler = () => {
    dispatch(uiActions.menuToggle())
  }
  const menuCloseHandler = () => {
    if (menuOpen) dispatch(uiActions.menuClose())
  }
  return (
    <NavbarContainer>
      <NavbarLeftSection>
        <Link to='/' onClick={menuCloseHandler}>
          <NavbarLogo src={logo} />
        </Link>
      </NavbarLeftSection>
      <NavbarRightSection>
        <NavbarMenu menuOpen={menuOpen}>
          <Link to='/' onClick={menuCloseHandler}>
            <NavbarItem>Home</NavbarItem>
          </Link>
          <Link to='/all' onClick={menuCloseHandler}>
            <NavbarItem>Archive</NavbarItem>
          </Link>
          <a href='https://www.tvmaze.com/' target='_blank' rel='noreferrer' onClick={menuCloseHandler}>
            <NavbarItem>The Api</NavbarItem>
          </a>
          <ThemeToggleButton />
        </NavbarMenu>
        <HamburgerMenu menuToggleHandler={menuToggleHandler} menuOpen={menuOpen} />
      </NavbarRightSection>
    </NavbarContainer>
  )
};

export default Navbar;