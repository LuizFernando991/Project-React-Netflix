import * as Styled from './styles'
import LogoNetflix from '../../Images/logonetflix.png'
import LogoUser from '../../Images/avatarnetflix.png'

import { useState, useEffect } from 'react'


export const Header = ()=>{

    const [ blackHeader, setBlackHeader ] = useState(false)

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
        <Styled.Header backgroundActivate = { blackHeader }>
            <div>
                <Styled.LogoImage href="/">
                    <img src={LogoNetflix} alt="Netflix" />
                </Styled.LogoImage>
            </div>
            <div>
                <Styled.LogoUser>
                    <img src={LogoUser} alt="Conta" /> 
                    <p>UserName ▿</p>
                </Styled.LogoUser>
            </div>
        </Styled.Header>
    )
}