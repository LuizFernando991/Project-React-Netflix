import * as Styled from './styles'
import { MoivieCard } from '../MovieCard'


export const MovieRow = ({  title, items }) =>{

    return(
        <Styled.Row>
            <h2>{title}</h2>
            <Styled.ListArea>
                <Styled.List>
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