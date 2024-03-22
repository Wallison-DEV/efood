import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ProdutoProps } from '../Home'
import ProductList from '../../Components/ProductList'
import { Imagem } from '../../Components/Banner/styles'
import Header from '../../Components/Header'

const Perfil = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState<ProdutoProps | null>(null)

    useEffect(() => {
        fetch(
            `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}/prato`
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data')
                }
                return res.json()
            })
            .then((data) => {
                const formattedData = {
                    id: data.id,
                    title: data.titulo,
                    description: data.descricao,
                    infos: data.cardapio.map(
                        (item: { nome: any }) => item.nome
                    ),
                    image: data.capa,
                    rating: data.avaliacao,
                }
                console.log(formattedData)
                setProduto(formattedData)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }, [id])

    console.log(produto)
    if (!produto) {
        return <h3>Carregando...</h3>
    }
    return (
        <>
            <Header />
            <Imagem
                style={{
                    backgroundImage: `url(${produto.image})`,
                }}
            />
            <div className="container">
                <ProductList title="" produto={[produto]} page="perfil" />
            </div>
        </>
    )
}

export default Perfil
