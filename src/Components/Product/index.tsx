import { CardProduct, Descricao } from './styles'
import { Button } from '../Button/styles'

export type CardapioItem = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

export type ProductProps = {
    cardapio: CardapioItem[]
}

const Product = ({ cardapio }: ProductProps) => {
    return (
        <CardProduct>
            {cardapio.map((item) => {
                const truncateDescription =
                    item.descricao.length > 125
                        ? item.descricao.substring(0, 125) + '...'
                        : item.descricao

                return (
                    <div key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <h3>{item.nome}</h3>
                        <Descricao>{truncateDescription}</Descricao>
                        <Button
                            type="btnProduct"
                            className="cardButton"
                            title="Saiba mais"
                        >
                            Mais detalhes
                        </Button>
                    </div>
                )
            })}
        </CardProduct>
    )
}

export default Product
