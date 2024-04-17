import { RestauranteProps } from '../../Pages/Home';
import Restaurante from '../Restaurante'
import { Container, List } from './styles'

export type RestauranteListProps = {
    restaurantes: RestauranteProps[] 
}
const RestauranteList = ({ restaurantes }: RestauranteListProps) => (
    <Container>
        <div className="container">
            <List>
                {restaurantes && restaurantes.length > 0 ? (
                    restaurantes.map((restaurante) => (
                        <Restaurante
                            key={restaurante.id}
                            titulo={restaurante.titulo}
                            descricao={restaurante.descricao}
                            tipo={[restaurante.tipo as unknown as string]}
                            capa={restaurante.capa}
                            avaliacao={restaurante.avaliacao}
                            id={restaurante.id} 
                            destacado={false} 
                            cardapio={[]} 
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
