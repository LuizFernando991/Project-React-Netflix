import { getHomeList, getMovie } from '../../helpers/apiHelper'
import { useEffect, useState } from 'react'

import * as Styled from './styles'

import { MovieRow } from '../../components/MovieRow'
import { HighLightMovie } from '../../components/HighLightMovie'
import { Header } from '../../components/Header'

function App(){

  const [ data, setData ] = useState([])
  const [ movieData, setMovieData ] = useState(null)
  const [ blackHeader, setBlackHeader ] = useState(false)

  useEffect( () => {
    
    const loadAll = async ()=>{

      const apiData = await getHomeList()
      setData(data => apiData)

      let originals = apiData.filter((i)=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenMovie = await getMovie(chosen.id, 'tv')

      setMovieData(d => chosenMovie)
      
    }

    loadAll()

    return ()=> {
      setData(data => [])
      setMovieData(null)
    }
    
  }, []);
  
  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(r => true)
      }else{
        setBlackHeader(r => false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return ()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return(

    <Styled.Container>
      <Header blackHeader={ blackHeader }/>
      { movieData &&
        <HighLightMovie item={movieData}/>
      }
      <Styled.Lists>
        {
          data.map((item, i)=>{
            return(
              <MovieRow key={i} title={item.title} items={item.items}/>
          )})
        }
      </Styled.Lists>
    </Styled.Container>


  )

}


export default App