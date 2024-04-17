import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { HeaderBar, CartButton } from './styles'
import logo from '../../assets/images/logo.png'
import fundoImg from '../../assets/images/fundo.png'

import { open } from '../../store/reducers/cart'

const Header = () => {
    const dispatch = useDispatch()
    const openCart = () => {
        dispatch(open())
    }
    return(
        <HeaderBar style={{ backgroundImage: `url(${fundoImg})` }}>
            <div>
                <h3>Restaurantes</h3>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <CartButton onClick={openCart} >0 - Produto(s) no carrinho</CartButton>
            </div>
        </HeaderBar>
    )
}

export default Header
