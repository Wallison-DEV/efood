import { useParams } from 'react-router-dom'
import ProductList from '../../Components/ProductList/index'
import { RestauranteImagem } from './styles'
import Header from '../../Components/Header'
import { useGetProductListQuery } from '../../services/api'
import { ProductProps } from '../../Components/Product'

const Perfil = () => {
    const { id: number } = useParams()
    const productId = number ? parseInt(number) : 0;
    const { data: produto } = useGetProductListQuery(productId);

    if (!produto) {
        return <h3>Carregando...</h3>
    }
    return (
        <>
            <Header />
            <RestauranteImagem
                style={{
                    backgroundImage: `url(${produto.capa})`,
                }}
            >
                <div className="container">
                    <h4>{produto.tipo}</h4>
                    <h3>{produto.titulo}</h3>
                </div>
            </RestauranteImagem>
            <div className="container">
                <ProductList produtos={[produto as unknown as ProductProps]} />
            </div>
        </>
    )
}

export default Perfil
