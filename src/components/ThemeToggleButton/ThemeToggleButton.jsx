import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// state
import { uiActions } from "../../app/slices/uiSlice";
// styles
import { 
    ThemeToggleButtonContainer,
    ThemeToggleSpan
} from './styles'
// icons
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

const ThemeToggle = () => {
    const dispatch = useDispatch()
    const toggleTheme = () => {
        dispatch(uiActions.toggleTheme())
    }
    const state = useSelector((state) => state.ui.theme)
    const icon = state === 'light' ? <HiMoon/> : <CgSun />
   
    return ( 
        <ThemeToggleButtonContainer onClick={toggleTheme}>
            <ThemeToggleSpan>{icon}</ThemeToggleSpan>
        </ThemeToggleButtonContainer>
    )
};

export default ThemeToggle;
