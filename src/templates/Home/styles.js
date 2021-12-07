import styled, { css } from "styled-components";



export const Container = styled.div`
    
    
    ${({isOpen})=> css` 
    ${isOpen ? 'opacity: 0.4;' : 'opacity : 1'}
    `}
    

`

export const Lists = styled.section`

    margin-top: -150px;

    
`


export const OverView = styled.div` 

    width: 100px;
    height: 100px;
    background: red;
    z-index: 10000000;
    position: absolute;
    top: 50%;
    left: 50%;

    ${({isOpen})=> css` 
        ${!isOpen && 'display: none;'}
    `}

`