import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { HeaderBar, CartButton } from './styles'
import logo from '../../assets/images/logo.png'
import fundoImg from '../../assets/images/fundo.png'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
    const { totalItems } = useSelector((state: RootReducer) => ({
        totalItems: state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
    }));
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
                <CartButton onClick={openCart} >{totalItems} - Produto(s) no carrinho</CartButton>
            </div>
        </HeaderBar>
    )
}

export default Header
