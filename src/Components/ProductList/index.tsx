import { ProdutoProps } from '../../Pages/Home'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type ProductListProps = {
    title: string
    produto: ProdutoProps[]
    page: 'home' | 'perfil'
}
const ProductList = ({ title, produto, page = 'home' }: ProductListProps) => (
    <Container page={page}>
        <div className="container">
            <Title>{title}</Title>
            <List page={page}>
                {produto && produto.length > 0 ? (
                    produto.map((product) => (
                        <Product
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

export default ProductList
