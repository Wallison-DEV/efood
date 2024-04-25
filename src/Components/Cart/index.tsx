import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button/index'

import closeImg from '../../assets/icons/close.png'

import * as S from './styles'

import { formataPreco, getTotalPrice } from '../../Utils/index'

import { RootReducer } from '../../store'
import {
    remove,
    add,
    decrement,
    changeSidebar,
    SidebarType,
    close,
} from '../../store/reducers/cart'

const Cart = () => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleIncrement = (id: number) => {
        const item: CardapioItem = {
            id: id,
            foto: '',
            preco: 0,
            nome: '',
            descricao: '',
            porcao: '',
        }
        dispatch(add(item))
    }

    const handleDecrement = (id: number) => {
        dispatch(decrement(id))
    }

    const removeCartItem = (id: number) => {
        dispatch(remove(id))
    }

    const closeCart = () => {
        dispatch(changeSidebar(SidebarType.CART))
        dispatch(close())
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <S.CartDiv>
            <S.CloseIcon
                className={
                    windowWidth !== undefined && windowWidth > 400
                        ? 'display-none'
                        : ''
                }
                src={closeImg}
                alt="Fechar"
                onClick={closeCart}
            />
            {items.length > 0 ? (
                <>
                    <ul>
                        {items.map((item) => (
                            <S.CartItem key={item.item.id}>
                                <img src={item.item.foto} />
                                <div>
                                    <h3>{item.item.nome}</h3>
                                    <span>{formataPreco(item.item.preco)}</span>
                                </div>
                                <S.ButtonDiv>
                                    <button
                                        onClick={() =>
                                            handleDecrement(item.item.id)
                                        }
                                        type="button"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}x</span>
                                    <button
                                        onClick={() =>
                                            handleIncrement(item.item.id)
                                        }
                                        type="button"
                                    >
                                        +
                                    </button>
                                    <button
                                        className="lixeira"
                                        onClick={() =>
                                            removeCartItem(item.item.id)
                                        }
                                        type="button"
                                    />
                                </S.ButtonDiv>
                            </S.CartItem>
                        ))}
                    </ul>
                    <div>
                        <p>Valor total</p>
                        <span>{formataPreco(getTotalPrice(items))}</span>
                    </div>
                    <Button
                        title="Prosseguir para a entrega"
                        onClick={() =>
                            dispatch(changeSidebar(SidebarType.CHECKOUT))
                        }
                        type="button"
                    >
                        Continuar com a entrega
                    </Button>
                </>
            ) : (
                <div className="empty-text">
                    <p> O carrinho está vazio</p>
                    <p>
                        Adicione pelo menos um produto para continuar com a
                        compra
                    </p>
                </div>
            )}
        </S.CartDiv>
    )
}

export default Cart
