import styled, { css } from "styled-components";


export const Row = styled.div`

    margin-bottom: 30px;

    h2{
        margin-left: 30px ;
    }


`

export const ListArea = styled.div`

    overflow-x: hidden;
    padding-left: 30px;


`

export const List = styled.div`
    
    transition: all ease 0.3s;


`
export const MoveRowLeft = styled.div`
    
    position: absolute;
    width: 40px;
    height: 225px;
    background: rgba(0, 0, 0, 0.6);
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.3s;
    &:hover{
        opacity: 1;
    }
    ${({buttonReveal})=> css`${buttonReveal && 'opacity: 1'}`}

    @media(max-width: 760px){
        opacity: 1;
    }

`

export const MoveRowRight = styled.div`
    
    position: absolute;
    width: 40px;
    height: 225px;
    background: rgba(0, 0, 0, 0.6);
    right: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.3s;
    &:hover{
        opacity: 1;
    }
    ${({buttonReveal})=> css`${buttonReveal && 'opacity: 1'}`}

    @media(max-width: 760px){
        opacity: 1;
    }

    

`