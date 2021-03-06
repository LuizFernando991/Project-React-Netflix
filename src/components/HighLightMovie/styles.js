import styled, { css } from "styled-components";


export const HighlightMoive = styled.section`

    height: 100vh;
    background-size: cover;
    background-position: center;
    ${({image})=> css`background-image: ${image};`}

    @media(max-width: 760px){
        height: 80vh;
    }

`

export const VerticalGradient = styled.div`

    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);

`
export const HorizontalGradient = styled.div`

    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 20%, transparent 80%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;

`

export const Name = styled.div` 

    font-size: 60px;
    font-weight: bold;
    @media(max-width: 760px){
        font-size: 40px;
    }

`

export const Info = styled.div` 

    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
    @media(max-width: 760px){
        font-size: 16px;
    }

`

export const Points = styled.div` 

    display: inline-block;
    color: #46d369;
    margin-right: 15px;
    

`

export const Year = styled.div` 

    display: inline-block;
    margin-right: 15px;

`

export const Seasons = styled.div` 

    display: inline-block;


`

export const Description = styled.div` 

    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
    @media(max-width: 760px){
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }

`

export const Buttons = styled.div` 
    
    margin-top: 15px;
    a:hover{
        opacity: 0.7;
        transition: all ease 0.2s;
    }

`

export const Genres = styled.div` 

    margin-top: 15px;
    font-size: 18px;
    color: #999;
    @media(max-width: 760px){
        font-size: 14px;
        
    }


`

export const ButtonWatch = styled.a` 

    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #fff;
    color: #000;
    @media(max-width: 760px){
        font-size: 16px;
        
    }

`

export const ButtonAddToMyList = styled.a` 

    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #333;
    color: #fff;
    @media(max-width: 760px){
        font-size: 16px;
        
    }
`