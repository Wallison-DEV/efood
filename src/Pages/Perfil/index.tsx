import { useParams } from 'react-router-dom'

import { RestauranteImagem } from './styles'

import ProductList from '../../Components/ProductList/index'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'

import { useGetProductListQuery } from '../../services/api'

type ProductParams = {
    id: number
}

const Perfil = () => {
    const { id } = useParams() as unknown as ProductParams
    const { data: produto, isLoading } = useGetProductListQuery(id)

    if (isLoading || !produto) {
        return <Loader />
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
