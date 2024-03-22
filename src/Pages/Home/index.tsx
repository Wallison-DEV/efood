import Banner from '../../Components/Banner'
import ProductList from '../../Components/ProductList'
import Game from '../../models/Game'

import imagem from '../../assets/images/imagem.png'
import imagem1 from '../../assets/images/imagem1.png'

const Promoções: Game[] = [
    {
        id: 1,
        title: 'Hioki Sushi',
        description: `Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. \n
        Experimente o Japão sem sair do lar com nosso delivery!`,
        infos: ['Italiana'],
        image: imagem,
        rating: 4.5,
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`,
        infos: ['Destaque da semana', 'Japonesa'],
        image: imagem1,
        rating: 4.7,
    },
    {
        id: 1,
        title: 'Hioki Sushi',
        description: `Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. \n
        Experimente o Japão sem sair do lar com nosso delivery!`,
        infos: ['Italiana'],
        image: imagem,
        rating: 4.5,
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`,
        infos: ['Destaque da semana', 'Japonesa'],
        image: imagem1,
        rating: 4.7,
    },
]

export const Home = () => (
    <>
        <Banner />
        <ProductList page='home' title="Promoções" games={Promoções} />
    </>
)
