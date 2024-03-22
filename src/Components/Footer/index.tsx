import { Container, FooterSection, Link, Links } from './styles'

import logo from '../../assets/images/logo.png'

import facebook from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/twitter.png'
import instagram from '../../assets/icons/instagram.png'

const Footer = () => (
    <Container>
        <div className="container">
            <FooterSection>
                <img src={logo} alt="E-FOOD logo" />
                <Links>
                    <li>
                        <Link>
                            <img src={facebook} alt="Visite nosso Facebook" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={twitter} alt="Visite nosso Twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={instagram} alt="Visite nosso Instagram" />
                        </Link>
                    </li>
                </Links>
            </FooterSection>
            <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade dos produtos é toda do
                estabelecimento contratado.
            </p>
        </div>
    </Container>
)

export default Footer
