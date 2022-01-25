import styled, { keyframes } from 'styled-components';

const clockwise = keyframes`
    to {
        transform: rotate(360deg);
    }
`
const counterclockwise = keyframes`
    to {
        transform: rotate(-360deg);
    }
`
export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.bg};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
`
export const LaodingWrapper = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border-top: 10px solid #D82E39;
    position: relative;
    animation: ${clockwise}  2s linear infinite;

    ::after, ::before {
        content: '';
        width: 200px;
        height: 200px;
        position: absolute;
        left: 0;
        top: -10px;
        border-radius: 50%;
    }
    ::before {
        border-top: 10px solid #38ADE5;
        transform: rotate(120deg);
    }
    ::after {
        border-top: 10px solid #3FB833;
        transform: rotate(240deg);
    }
`
export const LoadingSpan = styled.span`
    position: absolute;
    width: 200px;
    height: 200px;
    color: ${({theme}) => theme.text};
    text-align: center;
    line-height: 200px;
    animation: ${counterclockwise} 2s linear infinite;
`