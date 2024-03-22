import { Imagem, Titulo } from './styles'
import BannerImg from '../../assets/images/fundo.png'
import LogoImg from '../../assets/images/logo.png'

export const Banner = () => {
    return (
        <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="container">
                <div>
                    <img src={LogoImg} alt="E-FOOD logo" />
                </div>
                <div>
                    <Titulo>
                        Viva experiências gastronômicas
                        <br />
                        no conforto da sua casa
                    </Titulo>
                </div>
            </div>
        </Imagem>
    )
}

export default Banner
