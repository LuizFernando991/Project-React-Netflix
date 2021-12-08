import { getHomeList, getMovie } from '../../helpers/apiHelper'
import { useEffect, useState } from 'react'

import * as Styled from './styles'
import loadingGif from '../../Images/lodding_icon.gif'

import { MovieRow } from '../../components/MovieRow'
import { HighLightMovie } from '../../components/HighLightMovie'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OverView } from '../../components/OverView'

function App(){

  const [ data, setData ] = useState([])
  const [ movieData, setMovieData ] = useState(null)
  

  
 

  

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
  
  console.log('Rederizou')
  return(
    <>
      <Styled.Container>
        
        <Header /> 
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
        <Footer/>
        
          
      </Styled.Container>
      
      <OverView/>

      { data.length === 0 &&
        <Styled.Loading>
          <img src={loadingGif} alt="Carregando" />
        </Styled.Loading>
      }
      
  </>
  )

}


export default App