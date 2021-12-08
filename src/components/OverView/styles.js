import styled, { css, keyframes } from "styled-components"

const animateOpacity = keyframes`

    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    

`


export const OverViewContainer = styled.div` 

    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9999999;
    ${({isOpen})=> css` 
        ${!isOpen ? 'display: none' : 'display: block'}
    `}

`


export const OverView = styled.div` 

    width: 60vh;
    height: 90vh;
    background: red;
    z-index: 10000000;
    position: absolute;
    top: 50px;
    left: 35%;
    border-radius: 10px;
    
    animation: ${animateOpacity} 0.7s both ;
    
    ${({isOpen})=> css` 
        ${!isOpen ? `display: none;` : ``}
    `}
    

`

export const Image = styled.div`


    border-radius: 9px;
    width: inherit;
    height: 38%;
    background-position: center;
    background-size: contain;
    ${({image})=> css ` background-image : ${image}`};

    

`

export const VerticalGradient = styled.div`

    width: inherit;
    height: 100%;
    background: linear-gradient(to top, #111 10%, transparent 90%);
    display: flex;
    flex-direction: column;
    align-items: initial;

`

export const Icons = styled.div`

    padding-top: 10px;
    width: 10px;
    cursor: pointer;

`