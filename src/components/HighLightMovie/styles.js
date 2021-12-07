import styled, { css } from "styled-components";


export const HighlightMoive = styled.section`

    height: 100vh;
    background-size: cover;
    background-position: center;
    ${({image})=> css`background-image: ${image};`}
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

`

export const Name = styled.div` 





`

export const Info = styled.div` 





`

export const Points = styled.div` 





`

export const Year = styled.div` 

    



`

export const Seasons = styled.div` 

    



`

export const Description = styled.div` 

    



`

export const Buttons = styled.div` 

    



`

export const Genres = styled.div` 

    



`

export const ButtonWatch = styled.a` 

    



`

export const ButtonAddToMyList = styled.a` 

    



`