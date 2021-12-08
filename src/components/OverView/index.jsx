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
    let name = ''
    let date = ''
    let season = ''
    let description = ''
    
    if(data){
        url = data.backdrop_path
        name = data.name
        date = new Date(data.first_air_date).getFullYear()
        season = `${data.number_of_seasons} Temporada${data.number_of_seasons !== 1 ? 's' : ''}`
        description = data.overview
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
                        <Styled.Title>
                            {name}
                        </Styled.Title>
                        <Styled.Date>
                            {date} {season}
                        </Styled.Date>
                        <Styled.Play>
                            ▶
                        </Styled.Play>

                    </Styled.VerticalGradient>
                        <Styled.Description>
                            <h2>Descrição:</h2>
                            <p>{description}</p>
                        </Styled.Description>
                </Styled.Image>

            </Styled.OverView>
        
        </Styled.OverViewContainer>
    )

}