import styled from 'styled-components'
import { breakpoint, variable } from '../../styles/variables'

export const HamburgerButton = styled.div`
    display: none;
    @media ${breakpoint.sm} {
        position: absolute;
        right: ${variable.mdSpacing};
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        z-index: 20;
    }
`
export const HamburgerButtonMenu = styled.div`
    width: 30px;
    height: 4px;
    transition: all 0.5s ease-in-out;
    border-radius: ${variable.borderRadius};
    background: ${props => props.menuOpen ? 'transparent' : ({theme}) => theme.bg2}; 
    transform: ${props => props.menuOpen ? 'translateX(-50px)' : 'unset'};

    ::before, ::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 4px;
        border-radius: ${variable.borderRadius};
        background: ${({theme}) => theme.bg2};
        transition: all 0.5s ease-in-out;
    }
    ::before {
        transform: ${props => props.menuOpen ? 'rotate(45deg) translate(35px, -35px)' : 'translateY(-10px)'};
    }
    ::after {
        transform: ${props => props.menuOpen ? 'rotate(-45deg) translate(35px, 35px)' : 'translateY(10px)'};
    }
`