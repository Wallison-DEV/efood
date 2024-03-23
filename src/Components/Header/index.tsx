import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart } from './styles'
import logo from '../../assets/images/logo.png'

import fundoImg from '../../assets/images/fundo.png'

const Header = () => (
    <HeaderBar style={{ backgroundImage: `url(${fundoImg})` }}>
        <div>
            <h3>Restaurantes</h3>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <LinkCart href="">0 - Produto(s) no carrinho</LinkCart>
        </div>
    </HeaderBar>
)

export default Header
