import Product from '../Product/index'
import {
    Container,
    List,
    Modal,
    ModalContent,
    Information,
    CloseIcon,
} from './styles'
import { useState } from 'react'

import closeImg from '../../assets/icons/close.png'
import { Button } from '../Product/styles'

export type ProductListProps = {
    produtos: {
        cardapio: {
            capa: string
            foto: string
            preco: number
            id: number
            nome: string
            descricao: string
            porcao: string
        }[]
        id: number
        titulo: string
        destacado: boolean
        tipo: string
        avaliacao: number
        descricao: string
        capa: string
    }[]
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco)
}

const ProductList = ({ produtos }: ProductListProps) => {
    const [modal, setModal] = useState({
        estaVisivel: false,
        url: '',
        title: '',
        descricao: '',
        preco: 0,
        porcao: '',
    })

    const openModal = (item: {
        capa?: string
        foto: any
        preco: any
        id?: number
        nome: any
        descricao: any
        porcao: any
    }) => {
        setModal({
            estaVisivel: true,
            url: item.foto,
            title: item.nome,
            descricao: item.descricao,
            preco: item.preco,
            porcao: item.porcao,
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
        })
    }

    return (
        <Container>
            <div className="container">
                {produtos && produtos.length > 0 ? (
                    produtos.map((produto) => (
                        <div key={produto.id}>
                            <List>
                                {produto.cardapio.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => openModal(item)} // Alteração aqui
                                    >
                                        <Product
                                            key={item.id}
                                            title={item.nome}
                                            description={item.descricao}
                                            image={item.foto}
                                            id={item.id}
                                            porcao={item.porcao}
                                            preco={item.preco}
                                            capa={item.capa}
                                        />
                                    </div>
                                ))}
                            </List>
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
            {modal.estaVisivel && (
                <Modal className={modal.estaVisivel ? 'visivel' : ''}>
                    <ModalContent className="container">
                        <img
                            className="productImg"
                            src={modal.url}
                            alt={modal.title}
                        />
                        <div>
                            <h4>{modal.title}</h4>
                            <Information>
                                <p>{modal.descricao}</p>
                                <p>Serve: {modal.porcao}</p>
                            </Information>
                            <CloseIcon
                                src={closeImg}
                                alt="Fechar"
                                onClick={closeModal}
                            />
                            <Button style={{ marginTop: '16px' }}>
                                Adicionar ao carrinho -{' '}
                                {formataPreco(modal.preco)}
                            </Button>
                        </div>
                    </ModalContent>
                    <div onClick={closeModal} className="overlay"></div>
                </Modal>
            )}
        </Container>
    )
}

export default ProductList
