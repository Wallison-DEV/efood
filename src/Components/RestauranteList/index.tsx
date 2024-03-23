import { RestauranteProps } from '../../Pages/Home'
import Restaurante from '../Restaurante'
import { Container, List } from './styles'

export type RestauranteListProps = {
    produto: RestauranteProps[]
}
const RestauranteList = ({ produto }: RestauranteListProps) => (
    <Container>
        <div className="container">
            <List>
                {produto && produto.length > 0 ? (
                    produto.map((product) => (
                        <Restaurante
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            infos={product.infos}
                            image={product.image}
                            rating={product.rating}
                            id={product.id}
                        />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </List>
        </div>
    </Container>
)

export default RestauranteList
