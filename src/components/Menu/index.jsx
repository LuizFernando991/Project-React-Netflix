import * as Styled from './styles'

import { useClickOut } from '../../helpers/useClickOut'
import { useRef } from 'react'


export const Menu = ({ isActivated, setIsActivated, LogoRef })=>{

    
    


    useClickOut(setIsActivated, LogoRef)

    return(
        <Styled.Menu  isActivated = { isActivated }>
            <Styled.Arrow/>
            <ul>
                <li>
                    <a href="/">Link 1</a>
                </li>
                <li>
                    <a href="/">Link 2</a>
                </li>
                <li>
                    <a href="/">Link 3</a>
                </li>
            </ul>
        </Styled.Menu>
    )


}