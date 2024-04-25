import Tag from '../Tag'
import * as S from './styles'

import starImg from '../../assets/icons/estrela.png'
import Button from '../Button'

const Restaurante = ({
    titulo,
    descricao,
    tipo,
    capa,
    avaliacao,
    id,
}: RestauranteProps) => {
    const truncatedDescription =
        descricao && descricao.length > 248
            ? descricao.substring(0, 248) + '...'
            : descricao || ''

    return (
        <S.Card>
            <img src={capa} alt={titulo} />
            {Array.isArray(tipo) && tipo.length > 0 && (
                <S.Infos>
                    {tipo.map((info, index) => (
                        <Tag key={index}>{info}</Tag>
                    ))}
                </S.Infos>
            )}
            <section>
                <div>
                    <h3>{titulo}</h3>
                    <S.Ratting>
                        {avaliacao && avaliacao.toString()}{' '}
                        <img src={starImg} alt="Estrela de classificação" />
                    </S.Ratting>
                </div>
                <S.Descricao>{truncatedDescription}</S.Descricao>
                <Button title="Saiba mais" type="link" to={`/perfil/${id}`}>
                    Saiba mais
                </Button>
            </section>
        </S.Card>
    )
}

export default Restaurante
