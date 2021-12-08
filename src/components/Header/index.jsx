import * as Styled from './styles'
import LogoNetflix from '../../Images/logonetflix.png'
import LogoUser from '../../Images/avatarnetflix.png'
import { Menu } from '../Menu'

import { useState, useEffect, useRef } from 'react'


export const Header = ()=>{

    const [ blackHeader, setBlackHeader ] = useState(false)
    const [ isActivated, setIsActivated ] = useState(false)
    const LogoRef = useRef(null)

    useEffect(()=>{
        const scrollListener = ()=>{
          if(window.scrollY > 10){
            setBlackHeader(r => true)
            setIsActivated(r => false)
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
        < >
        <Styled.Header backgroundActivate = { blackHeader }>
            <div>
                <Styled.LogoImage href="/">
                    <img src={LogoNetflix} alt="Netflix" />
                </Styled.LogoImage>
            </div>
            <div>
                <Styled.LogoUser ref={LogoRef} onClick={()=>{setIsActivated(!isActivated)}}>
                    <img src={LogoUser} alt="Conta" /> 
                    <p>UserName ▿</p>
                    <Menu isActivated= { isActivated } LogoRef= { LogoRef.current } setIsActivated = {setIsActivated}/>
                </Styled.LogoUser>
            </div>
        </Styled.Header>
        
        </>
    )
}