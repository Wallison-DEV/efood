import { useDispatch, useSelector } from "react-redux"
import { ReactElement, JSXElementConstructor, ReactNode } from "react"

import { Button } from "../Button/styles"
import { formataPreco } from "../ProductList"
import { CartContainer, CartItem, Overlay, Sidebar, ButtonDiv } from "./styles"
import { RootReducer } from "../../store"
import { close, remove, add, decrement } from "../../store/reducers/cart"
import { CardapioItem } from "../Product"

const Cart = () => {
    const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeCartItem = (id: number) => {
        dispatch(remove(id))
    }

    const handleIncrement = (id: number) => {
        const item: CardapioItem = { id: id, foto: '', preco: 0, nome: '', descricao: '', porcao: '' };
        dispatch(add(item));
    };

    const handleDecrement = (id: number) => {
        dispatch(decrement(id)); 
    };
    
    const getTotalPrice = () => {
        return items.reduce((acumulador: any, valorAtual: { item: { preco: number }; quantity: number }) => {
            return (acumulador += valorAtual.item.preco * valorAtual.quantity);
        }, 0)
    }
    
    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart}/>
            <Sidebar>
                <ul>
                    {items.map((item: { item: { id: number; foto: string | undefined; nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; preco: number | undefined }; quantity: number }) => (
                        <CartItem key={item.item.id}>
                            <img src={item.item.foto}  />
                            <div>
                                <h3>{item.item.nome}</h3>
                                <span>{formataPreco(item.item.preco)}</span>
                            </div>
                            <ButtonDiv>
                                <button onClick={()=> handleDecrement(item.item.id)} type="button">-</button>
                                <span>{item.quantity}x</span>
                                <button onClick={()=> handleIncrement(item.item.id)} type="button">+</button>
                                <button
                                    className="lixeira"
                                    onClick={() => removeCartItem(item.item.id)}
                                    type="button"
                                />
                            </ButtonDiv>
                        </CartItem>
                    ))}
                </ul>
                <div>
                    <p>Valor total</p><span>{formataPreco(getTotalPrice())}</span>
                </div>
                <Button type="btnProduct">Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart
