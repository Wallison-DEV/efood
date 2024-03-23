import Product from '../Product/index'
import { Container, List } from './styles'

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

const ProductList = ({ produtos }: ProductListProps) => (
    <Container>
        <div className="container">
            {produtos && produtos.length > 0 ? (
                produtos.map((produto) => (
                    <div key={produto.id}>
                        <List>
                            {produto.cardapio.map((item) => (
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
                            ))}
                        </List>
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
    </Container>
)

export default ProductList
