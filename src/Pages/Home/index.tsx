import { useEffect, useState } from 'react'
import Banner from '../../Components/Banner'
import ProductList from '../../Components/ProductList'

export type ProdutoProps = {
    id: number
    title: string
    description: string
    infos: string[]
    image: string
    rating: number
}

export const Home = () => {
    const [produtos, setProdutos] = useState<ProdutoProps[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data')
                }
                return res.json()
            })
            .then((data) => {
                const formattedData = data.map(
                    (item: {
                        id: any
                        titulo: any
                        descricao: any
                        cardapio: any[]
                        capa: any
                        avaliacao: any
                    }) => ({
                        id: item.id,
                        title: item.titulo,
                        description: item.descricao,
                        infos: item.cardapio.map(
                            (item: { nome: any }) => item.nome
                        ),
                        image: item.capa,
                        rating: item.avaliacao,
                    })
                )
                console.log(formattedData)
                setProdutos(formattedData)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }, [])

    return (
        <>
            <Banner />
            <ProductList title="Produtos" produto={produtos} page="home" />
        </>
    )
}
