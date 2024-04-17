import Banner from '../../Components/Banner'
import RestauranteList from '../../Components/RestauranteList/'
import {useGetRestaurantListQuery} from '../../services/api'

export type RestauranteProps = {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string[];
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: {
        foto: string;
        preco: number;
        id: number;
        nome: string;
        description: string;
        porcao: string;
    }[];
};


export const Home = () => {
    const { data: restaurantes } = useGetRestaurantListQuery();

    if (!restaurantes || restaurantes.length === 0) {
        return <h3>Carregando...</h3>;
    }
    
    return (
        <>
            <Banner />
            <RestauranteList restaurantes={restaurantes} />
        </>
    )
}

