import styled from 'styled-components'
import { variable, breakpoint } from '../../styles/variables'

export const NavbarContainer = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: ${variable.headerHeight};
    background: ${({theme}) => theme.bg};
    display: flex;
    justify-content: space-evenly;
    padding: 0 ${variable.xxlSpacing};
    z-index: 20;
    margin-bottom: ${variable.xxlSpacing};
    @media ${breakpoint.sm} {
        padding: 0 ${variable.mdSpacing};
    }
`
export const NavbarLeftSection = styled.div`
    flex: 1;
`
export const NavbarLogo = styled.img`
    height: 100%;
`
export const NavbarRightSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
export const NavbarMenu = styled.ul`
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    transition: all 0.3s ease-in-out;
    
    @media ${breakpoint.sm} {
        position: fixed;
        z-index: 19;
        right: 0;
        top: 0;
        justify-content: space-around;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: ${({theme}) => theme.bg};
        transform: ${props => props.menuOpen ? 'translateX(0)' : 'translateX(100%)'};
    }
`
export const NavbarItem = styled.li`
    margin-right: ${variable.lgSpacing};
    cursor: pointer;
    position: relative;
    padding-bottom: 3px;

    ::after {
        content: '';
        width: 0;
        height: 3px;
        background-color: ${({theme}) => theme.textSecondary};
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all .3s ease-in-out;
    }

    :hover {
        ::after {
            width: 100%;
        }
    }
`