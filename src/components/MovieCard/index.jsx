import * as Styled from './styles'


export const MoivieCard = ({ item })=>{



    return(
        <Styled.Item>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
        </Styled.Item>
    )

    
}

