import Banner from '../../Components/Banner'
import Loader from '../../Components/Loader'
import RestauranteList from '../../Components/RestauranteList/'
import { useGetRestaurantListQuery } from '../../services/api'

export const Home = () => {
    const { data: restaurantes, isLoading } = useGetRestaurantListQuery()

    if (!restaurantes || restaurantes.length === 0 || isLoading) {
        return <Loader />
    }

    return (
        <>
            <Banner />
            <RestauranteList restaurantes={restaurantes} />
        </>
    )
}
