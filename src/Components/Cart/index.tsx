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

    const removeCartItem = (index: number) => {
        dispatch(remove(index));
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador: any, valorAtual: { preco: any }) => {
            return (acumulador += valorAtual.preco!)
        }, 0)
    }
    
    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart}/>
            <Sidebar>
                <ul>
                {items.map((item: { id: number; foto: string | undefined; nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; preco: number | undefined }, index: number) => (
                    <CartItem key={item.id}>
                        <img src={item.foto}  />
                        <div>
                            <h3>{item.nome}</h3>
                            <span>{formataPreco(item.preco)}</span>
                        </div>
                        <button
                            onClick={() => removeCartItem(index)}
                            type="button"
                        />
                    </CartItem>
                ))}
                </ul>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p>Valor total</p><span>{formataPreco(getTotalPrice())}</span>
                </div>
                <Button style={{width: '100%'}} type="btnProduct">Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart