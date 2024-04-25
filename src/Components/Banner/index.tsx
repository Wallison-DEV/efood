import * as S from './styles'

import BannerImg from '../../assets/images/fundo.png'
import LogoImg from '../../assets/images/logo.png'

export const Banner = () => {
    return (
        <S.Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="container">
                <div>
                    <img src={LogoImg} alt="E-FOOD logo" />
                </div>
                <div>
                    <S.Titulo>
                        Viva experiências gastronômicas
                        <br />
                        no conforto da sua casa
                    </S.Titulo>
                </div>
            </div>
        </S.Imagem>
    )
}

export default Banner
