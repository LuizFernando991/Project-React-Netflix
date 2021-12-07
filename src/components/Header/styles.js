import styled, { css } from "styled-components";

export const Header = styled.header` 

    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: transparent;
    transition: all ease 0.6s;

    ${({backgroundActivate})=> css`
        ${backgroundActivate && 'background-color: #141414;'}
    `}
    

`


export const LogoImage = styled.a`

    

    img{
        max-width: 120px;
    }

`


export const LogoUser = styled.a`

    display: flex;
    flex-direction: row;
    align-items: center;
    

    img{
        max-width: 40px;
        border-radius: 3px;
        margin-right: 5px;
    }

`