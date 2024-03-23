import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductList from '../../Components/ProductList/index'
import { ProductProps } from '../../Components/Product'
import { RestauranteImagem } from './styles'
import Header from '../../Components/Header'

const Perfil = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState<ProductProps | null>(null)

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data')
                }
                return res.json()
            })
            .then((data) => {
                setProduto(data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }, [id])

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
            />
            <div className="container">
                <ProductList produtos={[produto]} />
            </div>
        </>
    )
}

export default Perfil
