import * as Styled from './styles'
import { getMovie } from '../../helpers/apiHelper'
import { OverViewContext } from '../../context/OverviewContext'
import { useContext } from 'react'


export const MoivieCard = ({ item })=>{

    const { setIsOpen, setData } = useContext(OverViewContext)


    const handleClick = async()=>{

        const info = await getMovie(item.id, item.media_type)
        setData(info)
        setIsOpen(true)

    }

    return(
        <Styled.Item onClick={handleClick}>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
        </Styled.Item>
    )

    
}

