import { CardProduct, Descricao, Titulo, Button } from './styles'

export type ProductProps = {
    description: string
    image: string
    id: number
    title: string
    porcao: string
    preco: number
    capa: string
}

const Product = ({ description, image, title }: ProductProps) => {
    const truncatedDescription =
        description.length > 125
            ? description.substring(0, 125) + '...'
            : description

    return (
        <CardProduct>
            <div>
                <img src={image} alt={title} />
                <Titulo>{title}</Titulo>
                <Descricao>{truncatedDescription}</Descricao>
            </div>
            <Button title="Saiba mais">Adicionar ao carrinho</Button>
        </CardProduct>
    )
}

export default Product
