import Tag from '../Tag'
import { Card, Descricao, Infos, Ratting } from './styles'

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

const Restaurante = ({
    title,
    description,
    infos,
    image,
    rating,
    id,
}: ProductProps) => {
    const truncatedDescription =
        description.length > 248
            ? description.substring(0, 248) + '...'
            : description

    return (
        <Card>
            <img src={image} alt={title} />
            {infos && infos.length > 0 && (
                <Infos>
                    {infos.map((info) => (
                        <Tag key={info}>{info}</Tag>
                    ))}
                </Infos>
            )}
            <section>
                <div>
                    <h3>{title}</h3>
                    <Ratting>
                        {rating && rating.toString()}{' '}
                        <img src={starImg} alt="Estrela de classificação" />
                    </Ratting>
                </div>
                <Descricao>{truncatedDescription}</Descricao>
                <Button
                    title="Saiba mais"
                    children="Saiba mais"
                    to={`/perfil/${id}`}
                ></Button>
            </section>
        </Card>
    )
}

export default Restaurante
