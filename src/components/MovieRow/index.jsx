import * as Styled from './styles'
import { MoivieCard } from '../MovieCard'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useRef, useState} from 'react'

export const MovieRow = ({  title, items }) =>{

    const [ buttonReveal, setButtonReveal] = useState(false)
    const [ scrollX, setScrollX] = useState(0)
    const buttonsDiv = useRef(null)


    const handleLeftArrow = ()=>{

        let x = scrollX + Math.round(window.innerWidth/2)

        if(x > 0){
            x=0
        }

        setScrollX(x)

    }

    const handleRightArrow = ()=>{
        let x = scrollX - Math.round(window.innerWidth/2)

        let list = items.results.length * 150

        if((window.innerWidth - list)> x){
            x = (window.innerWidth - list) - 80
        }

        setScrollX(x)

    }



    return(
        <Styled.Row>
            <h2>{title}</h2>


                <Styled.MoveRowLeft onClick={handleLeftArrow} buttonReveal={buttonReveal}>
                    <NavigateBeforeIcon style={{fontSize: 50}}/>
                </Styled.MoveRowLeft>
                <Styled.MoveRowRight onClick={handleRightArrow} buttonReveal={buttonReveal}>
                    <NavigateNextIcon style={{fontSize: 50}}/>
                </Styled.MoveRowRight>


            <Styled.ListArea ref={buttonsDiv.current} onMouseLeave={()=>setButtonReveal(false)} onMouseEnter={()=>setButtonReveal(true)}>
                <Styled.List style={{ marginLeft: scrollX, width: items.results.length * 150 }}>
                    {items.results.length > 0 && items.results.map((item, key)=>{
                        return (
                            <MoivieCard key={key} item = {item}/>
                        )
                    })}
                </Styled.List>
            </Styled.ListArea>
        </Styled.Row>
    )
}