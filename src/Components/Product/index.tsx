import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo, Ratting } from './styles'

import starImg from '../../assets/icons/estrela.png'
import Button from '../Button'

type ProductProps = {
    title: string
    description: string
    infos: string[]
    image: string
    rating: number
    id: number
}

const Product = ({
    title,
    description,
    infos,
    image,
    rating,
    id,
}: ProductProps) => (
    <Card>
        <img src={image} alt={title} />
        {infos && infos.length > 0 && (
            <Infos>
                {infos.map((info) => (
                    <Tag key={info}>{info}</Tag>
                ))}
            </Infos>
        )}
        <div>
            <Titulo>{title}</Titulo>
            <Ratting>
                {rating && rating.toString()}{' '}
                <img src={starImg} alt="Estrela de classificação" />
            </Ratting>
        </div>
        <Descricao>{description}</Descricao>
        <Button
            type="dark"
            title="Saiba mais"
            children="Saiba mais"
            to={`/perfil/${id}`}
        ></Button>
    </Card>
)

export default Product
