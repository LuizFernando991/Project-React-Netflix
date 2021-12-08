import { useClickOut } from '../../helpers/useClickOut'
import { useRef, useContext } from 'react'
import { OverViewContext } from '../../context/OverviewContext'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'


import * as Styled from './styles'


export const OverView = ()=>{
    
    const {setIsOpen, isOpen, data} = useContext(OverViewContext)
    
    const overviewRef = useRef(null)

    console.log(data)

    let url = ''
    
    if(data){
        url = data.backdrop_path
    }


    useClickOut(setIsOpen, overviewRef.current)

    return(
        <Styled.OverViewContainer isOpen={isOpen}>
            <Styled.OverView ref={overviewRef} isOpen={isOpen}>
                <Styled.Image image={`url(https://image.tmdb.org/t/p/original${url})`}>
                    <Styled.VerticalGradient>
                        <Styled.Icons>
                            <NavigateBeforeIcon onClick={()=>setIsOpen(false)} style={{fontSize: 40}}/>
                        </Styled.Icons>
                    </Styled.VerticalGradient>
                </Styled.Image>

            </Styled.OverView>
        
        </Styled.OverViewContainer>
    )

}