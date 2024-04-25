import * as S from './styles'

import logo from '../../assets/images/logo.png'
import facebook from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/twitter.png'
import instagram from '../../assets/icons/instagram.png'

const Footer = () => (
    <S.Container>
        <div className="container">
            <S.FooterSection>
                <img src={logo} alt="E-FOOD logo" />
                <S.Links>
                    <li>
                        <S.Link href="https://facebook.com">
                            <img src={facebook} alt="Visite nosso Facebook" />
                        </S.Link>
                    </li>
                    <li>
                        <S.Link href="https://x.com">
                            <img src={twitter} alt="Visite nosso Twitter" />
                        </S.Link>
                    </li>
                    <li>
                        <S.Link href="https://instagram.com">
                            <img src={instagram} alt="Visite nosso Instagram" />
                        </S.Link>
                    </li>
                </S.Links>
            </S.FooterSection>
            <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade dos produtos é toda do
                estabelecimento contratado.
            </p>
        </div>
    </S.Container>
)

export default Footer
