import styled, { css } from "styled-components";

export const Menu = styled.div` 

    border-radius: 10px 10px 10px 10px;
    width: 200px;
    height: 200px;
    display: inline-block;
    position: fixed;
    background-color: #111;
    top: 70px;
    right: 10px;
    display: flex;
    align-items: center;
    z-index: 999;

    ul{
        margin: 0  auto;
        list-style: none;
    }

    ul li{
        padding-bottom: 15px;
    }

    ul li a{
        color: #fff;
        text-decoration: none;
        font-size: 20px;
    }

    ul li a:hover{
        opacity: 0.8;
    }

    ${({isActivated})=> css` 
        ${!isActivated && 'display: none;' }
    `}


`

export const Arrow = styled.div` 
    width: 0px; 
    height: 20px; 
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: relative;
    top: -55%;
    right: -84%;
        
    border-bottom: 5px solid #111;

`