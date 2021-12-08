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
    background: #111;
    z-index: 10000000;
    position: absolute;
    top: 70px;
    left: 35%;
    border-radius: 10px;
    
    animation: ${animateOpacity} 0.7s both ;
    
    ${({isOpen})=> css` 
        ${!isOpen ? `display: none;` : ``}
    `}

    @media(max-width: 760px){
        font-size: 16px;
        left: 0%;
        
    }
    

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
    position: relative;

`

export const Icons = styled.div`

    padding-top: 10px;
    width: 10px;
    cursor: pointer;

`

export const Title = styled.h3`
    margin-top: auto;
    margin-bottom: 30px;
    font-size: 30px;
    margin-left: 10px;
    @media(max-width: 760px){
        font-size: 16px;
        
    }
    
    
`

export const Date = styled.div` 

    margin-left: 10px;
    


`

export const Play = styled.div` 


    font-size: 40px;
    margin-left: 10px;
    position: relative;
    left: 45%;
    top: -55%;
    


`


export const Description = styled.div` 

    margin-left: 10px;
    margin-top: 10%;
    max-height: 80%;
    max-width: 80%;
    padding-bottom: 40px;
    @media(max-width: 760px){
        font-size: 16px;
        
    }

`