import { useDispatch, useSelector } from "react-redux"
import { ReactElement, JSXElementConstructor, ReactNode } from "react"

import { Button } from "../Button/styles"
import { formataPreco } from "../ProductList"
import { CartContainer, CartItem, Overlay, Sidebar } from "./styles"
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"

const Cart = () => {
    const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeCartItem = (id: number) => {
        dispatch(remove(id))
    }

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
                                <h3>{item.item.nome} {item.quantity > 1 ? `(${item.quantity}x)` : ''}</h3>
                                <span>{formataPreco(item.item.preco)}</span>
                            </div>
                            <button
                                onClick={() => removeCartItem(item.item.id)}
                                type="button"
                            />
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
