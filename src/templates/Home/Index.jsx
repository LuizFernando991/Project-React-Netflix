import { getHomeList, getMovie } from '../../helpers/apiHelper'
import { useClickOut } from '../../helpers/useClickOut'
import { useEffect, useState, useRef } from 'react'

import * as Styled from './styles'

import { MovieRow } from '../../components/MovieRow'
import { HighLightMovie } from '../../components/HighLightMovie'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

function App(){

  const [ data, setData ] = useState([])
  const [ movieData, setMovieData ] = useState(null)
  const [ isOpen, setIsOpen ] = useState(true)

  const overviewRef = useRef(null)
 



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
  
  

  useClickOut(setIsOpen, overviewRef.current)



  return(
    <>
      <Styled.Container isOpen={isOpen}>
        
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
      
      <Styled.OverViewContainer isOpen={isOpen}>
        <Styled.OverView ref={overviewRef} isOpen={isOpen}/>
      </Styled.OverViewContainer>
  </>
  )

}


export default App