import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, Title } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
    <HeaderBar>
        <Title>Restaurantes</Title>
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
        <LinkCart href="">0 - Produto(s)</LinkCart>
    </HeaderBar>
)

export default Header
