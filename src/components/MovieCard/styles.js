import styled from "styled-components"


export const Item = styled.div`

    display: inline-block;
    width: 150px;
    cursor: pointer;

    img{
        width: 100%;
        transform: scale(0.9);
        transition: all 0.1s ease;
    }

    img:hover{
        transform: scale(1);
    }
`