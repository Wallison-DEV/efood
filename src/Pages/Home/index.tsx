import { useEffect, useState } from 'react'
import Banner from '../../Components/Banner'
import RestauranteList from '../../Components/RestauranteList/'

export type RestauranteProps = {
    id: number
    title: string
    description: string
    infos: string[]
    image: string
    rating: number
    tipo: string
}

export const Home = () => {
    const [restaurantes, setRestaurantes] = useState<RestauranteProps[]>([])

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
                        tipo: any
                        id: any
                        titulo: any
                        descricao: any
                        capa: any
                        avaliacao: any
                    }) => ({
                        id: item.id,
                        title: item.titulo,
                        description: item.descricao,
                        infos: Array.isArray(item.tipo)
                            ? item.tipo
                            : [item.tipo],
                        image: item.capa,
                        rating: item.avaliacao,
                    })
                )
                setRestaurantes(formattedData)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }, [])

    return (
        <>
            <Banner />
            <RestauranteList produto={restaurantes} />
        </>
    )
}
