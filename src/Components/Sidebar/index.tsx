import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { SidebarType, changeSidebar, close } from '../../store/reducers/cart'

import Cart from '../Cart'
import Checkout from '../Checkout'

import * as S from './styles'

const Sidebar = () => {
    const { activeSidebar, isOpen } = useSelector(
        (state: RootReducer) => state.cart
    )
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(changeSidebar(SidebarType.CART))
        dispatch(close())
    }
    return (
        <S.SidebarContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.SidebarDiv>
                {activeSidebar && activeSidebar === SidebarType.CART ? (
                    <Cart />
                ) : (
                    <Checkout />
                )}
            </S.SidebarDiv>
        </S.SidebarContainer>
    )
}

export default Sidebar
