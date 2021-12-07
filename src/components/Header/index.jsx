import * as Styled from './styles'
import LogoNetflix from '../../Images/logonetflix.png'
import LogoUser from '../../Images/avatarnetflix.png'



export const Header = ({blackHeader})=>{


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
                </Styled.LogoUser>
            </div>
        </Styled.Header>
    )
}