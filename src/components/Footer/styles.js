import styled from 'styled-components'
import {variable,space,breakpoint} from '../../styles/variables'

export const FooterContainer = styled.footer`
    background-color: #24262b;
    padding: ${variable.xxlSpacing};
    width: 100%;
    margin-top: ${variable.xxlSpacing};

    @media ${breakpoint.md} {
        padding: ${variable.mdSpacing};
    }
`
export const FooterWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
`
export const FooterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const FooterCol = styled.div`
    width: 25%;
    padding: 0 ${variable.mdSpacing};

    @media ${breakpoint.md} {
        width: 100%;
        margin-bottom: ${variable.smSpacing};
        padding: ${variable.mdSpacing};
    }
`
export const FooterTitle = styled.h4`
    color: #fff;
    text-transform: capitalize;
    font-size: 18px;
    position: relative;
    margin-bottom: ${variable.smSpacing};
    padding-bottom: ${variable.smSpacing};

    ::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: ${({theme}) => theme.textSecondary};
        height: 3px;
        box-sizing: border-box;
        width: 50px;
    }
`
export const FooterList = styled.ul``
export const FooterItem = styled.li`
    margin-bottom: ${variable.smSpacing};
    color: rgba(255,255,255,0.3);
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: centers;
    text-transform: capitalize;

    :hover {
        padding-left: ${variable.smSpacing};
    }
`
export const FooterIcon = styled.span`
    color: #fff;
    margin-right: 4px;
`