import ProductList from '../../Components/ProductList'
import Game from '../../models/Game'

import { Imagem } from '../../Components/Banner/styles'

import apresentacao from '../../assets/images/apresentacao.png'
import imagem2 from '../../assets/images/imagem2.png'
import Header from '../../Components/Header'

const Produtos: Game[] = [
    {
        id: 1,
        title: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        infos: ['25%', 'R$126,75'],
        image: imagem2,
        rating: 4.5,
    },
    {
        id: 2,
        title: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        infos: ['50%', 'R$174,95'],
        image: imagem2,
        rating: 4.7,
    },
    {
        id: 3,
        title: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        infos: ['25%', 'R$126,75'],
        image: imagem2,
        rating: 4.5,
    },
    {
        id: 4,
        title: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        infos: ['50%', 'R$174,95'],
        image: imagem2,
        rating: 4.7,
    },
    {
        id: 5,
        title: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        infos: ['50%', 'R$174,95'],
        image: imagem2,
        rating: 4.7,
    },
    {
        id: 6,
        title: 'Pizza Marguerita',
        description: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
        infos: ['50%', 'R$174,95'],
        image: imagem2,
        rating: 4.7,
    },
]

export const Categories = () => (
    <>
        <Header />
        <Imagem
            style={{
                backgroundImage: `url(${apresentacao})`,
            }}
        />
        <div className="container">
            <ProductList page="perfil" title="" games={Produtos} />
        </div>
    </>
)
