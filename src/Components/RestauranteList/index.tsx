import Restaurante from '../Restaurante'
import * as S from './styles'

export type RestauranteListProps = {
    restaurantes: RestauranteProps[]
}
const RestauranteList = ({ restaurantes }: RestauranteListProps) => {
    return (
        <S.Container>
            <div className="container">
                <S.List>
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
                </S.List>
            </div>
        </S.Container>
    )
}

export default RestauranteList
