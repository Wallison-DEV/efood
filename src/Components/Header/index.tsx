import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import fundoImg from '../../assets/images/fundo.png'
import cartIcon from '../../assets/icons/cart.png'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
    const dispatch = useDispatch()
    const totalItems = useSelector((state: RootReducer) =>
        state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
    )
    const [isMenuOpen, setMenuOpen] = useState(false)
    const openCart = () => {
        dispatch(open())
    }
    return (
        <S.HeaderBar style={{ backgroundImage: `url(${fundoImg})` }}>
            <S.HeaderRow>
                <S.Hamburguer onClick={() => setMenuOpen(!isMenuOpen)}>
                    <span />
                    <span />
                    <span />
                </S.Hamburguer>
                <nav>
                    <S.Links>
                        <S.LinkItem>
                            <S.NavLink
                                title="Clique aqui para ir para a página de restaurantes"
                                to="/"
                            >
                                Restaurantes
                            </S.NavLink>
                        </S.LinkItem>
                    </S.Links>
                </nav>
                <Link title="Clique aqui para ir para a página inicial" to="/">
                    <img
                        src={logo}
                        alt="Logo EFOOD
                    "
                    />
                </Link>
                <S.CartButton onClick={openCart}>
                    {totalItems}
                    <span> - Produto(s) no carrinho</span>
                    <img src={cartIcon} alt="Carrinho" />
                </S.CartButton>
            </S.HeaderRow>
            <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
                <S.Links>
                    <S.LinkItem>
                        <S.NavLink
                            title="Clique aqui para ir para a página de restaurantes"
                            to="/"
                        >
                            Restaurantes
                        </S.NavLink>
                        <S.NavLink
                            title="Clique aqui para ir para a página de pedidos"
                            to="/"
                        >
                            Meus pedidos
                        </S.NavLink>
                        <S.NavLink
                            title="Clique aqui para ir para a página de perfil"
                            to="/"
                        >
                            Meu perfil
                        </S.NavLink>
                    </S.LinkItem>
                </S.Links>
            </S.NavMobile>
        </S.HeaderBar>
    )
}

export default Header
