import Product from '../Product'
import { Container, List, Title } from './styles'

import Game from '../../models/Game'

export type ProductListProps = {
    title: string
    games: Game[]
    page: 'home' | 'perfil'
}
const ProductList = ({ title, games, page = 'home' }: ProductListProps) => (
    <Container page={page}>
        <div className="container">
            <Title>{title}</Title>
            <List page={page}>
                {games.map((game) => (
                    <Product
                        key={game.id}
                        title={game.title}
                        description={game.description}
                        infos={game.infos}
                        image={game.image}
                        rating={game.rating}
                    />
                ))}
            </List>
        </div>
    </Container>
)

export default ProductList
