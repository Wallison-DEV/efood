import { CardProduct, Descricao, Button } from './styles'

type CardapioItem = {
    capa: string
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

export type ProductProps = {
    cardapio: CardapioItem[]
    id: number
    title: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    image: string
    capa: string
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
                        <Button className="cardButton" title="Saiba mais">
                            Adicionar ao carrinho
                        </Button>
                    </div>
                )
            })}
        </CardProduct>
    )
}

export default Product
