import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Product from '../Product/index'
import Button from '../Button/index'

import closeImg from '../../assets/icons/close.png'

import * as S from './styles'

import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../Utils'

const ProductList = ({ produtos }: ProductListProps) => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState({
        estaVisivel: false,
        url: '',
        title: '',
        descricao: '',
        preco: 0,
        porcao: '',
        selectedItem: {} as CardapioItem,
    })

    const openCart = () => {
        dispatch(open())
    }

    const addToCart = (item: CardapioItem) => {
        dispatch(add(item))
    }

    const openModal = (item: CardapioItem) => {
        setModal({
            estaVisivel: true,
            url: item.foto,
            title: item.nome,
            descricao: item.descricao,
            preco: item.preco,
            porcao: item.porcao,
            selectedItem: item,
        })
    }

    const closeModal = () => {
        setModal({
            estaVisivel: false,
            url: '',
            title: '',
            descricao: '',
            preco: 0,
            porcao: '',
            selectedItem: {} as CardapioItem,
        })
    }

    return (
        <S.Container>
            <div className="container">
                {produtos && produtos.length > 0 ? (
                    <S.List>
                        {produtos.map((produto) =>
                            produto.cardapio.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => openModal(item)}
                                >
                                    <Product key={item.id} cardapio={[item]} />
                                </div>
                            ))
                        )}
                    </S.List>
                ) : (
                    <p>No products available.</p>
                )}
            </div>
            {modal.estaVisivel && (
                <S.Modal className={modal.estaVisivel ? 'visivel' : ''}>
                    <S.ModalContent className="container">
                        <img
                            className="productImg"
                            src={modal.url}
                            alt={modal.title}
                        />
                        <div>
                            <S.CloseIcon
                                src={closeImg}
                                alt="Fechar"
                                onClick={closeModal}
                            />
                            <h4>{modal.title}</h4>
                            <S.Information>
                                <p>{modal.descricao}</p>
                                <p>Serve: {modal.porcao}</p>
                            </S.Information>
                            <Button
                                type="button"
                                title="Adicionar item ao carrinho"
                                onClick={() => {
                                    addToCart(modal.selectedItem)
                                    openCart()
                                }}
                                maxwidth="218px"
                                className="margin-top"
                            >
                                {'Adicionar ao carrinho - ' +
                                    formataPreco(modal.preco)}
                            </Button>
                        </div>
                    </S.ModalContent>
                    <div onClick={closeModal} className="overlay"></div>
                </S.Modal>
            )}
        </S.Container>
    )
}

export default ProductList
