import * as Styled from './styles'


export const HighLightMovie = ({ item })=>{

    const date = new Date(item.first_air_date)

    let genres = []

    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return(
        <Styled.HighlightMoive image={`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}>
            <Styled.VerticalGradient>
                <Styled.HorizontalGradient>
                    <Styled.Name>{item.original_name}</Styled.Name>
                    <Styled.Info>
                        <Styled.Points>{item.vote_average} pontos</Styled.Points>
                        <Styled.Year>{date.getFullYear()}</Styled.Year>
                        <Styled.Seasons>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</Styled.Seasons>
                    </Styled.Info>
                    <Styled.Description>
                        {item.overview}
                    </Styled.Description>
                    <Styled.Buttons>
                        <Styled.ButtonWatch href="#">▶ Assistir</Styled.ButtonWatch>
                        <Styled.ButtonAddToMyList href="#">+ Minha lista</Styled.ButtonAddToMyList>
                    </Styled.Buttons>
                    <Styled.Genres>
                        Gêneros: <strong>{genres.join(', ')}</strong>
                    </Styled.Genres>
                </Styled.HorizontalGradient>
            </Styled.VerticalGradient>
        </Styled.HighlightMoive>
    )


}