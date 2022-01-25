import styled from 'styled-components'
import { variable } from '../../styles/variables'

export const ThemeToggleButtonContainer = styled.button`
    cursor: pointer;
    height: 30px;
    width: 30px;
    border-radius: ${variable.borderRadius};
    background: ${({theme}) => theme.bg};
    transition: all 0.5 ease-in-out;
    border: 2px solid ${({theme}) => theme.bg2};
    display: flex;
    justify-content: center;
    align-items: center;
   
    :focus {
        outline: none;
    }
`
export const ThemeToggleSpan = styled.span`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${variable.borderRadius};
    transition: all 0.5s ease;

    :hover {
        transform: scale(1.5);
    }
`