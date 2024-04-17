import Tag from '../Tag';
import { Card, Descricao, Infos, Ratting } from './styles';

import starImg from '../../assets/icons/estrela.png';
import Button from '../Button';
import { RestauranteProps } from '../../Pages/Home';

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
            : descricao || '';

    return (
        <Card>
            <img src={capa} alt={titulo} />
            {Array.isArray(tipo) && tipo.length > 0 && (
                <Infos>
                    {tipo.map((info, index) => (
                        <Tag key={index}>{info}</Tag>
                    ))}
                </Infos>
            )}
            <section>
                <div>
                    <h3>{titulo}</h3>
                    <Ratting>
                        {avaliacao && avaliacao.toString()}{' '}
                        <img
                            src={starImg}
                            alt="Estrela de classificação"
                        />
                    </Ratting>
                </div>
                <Descricao>{truncatedDescription}</Descricao>
                <Button
                    title="Saiba mais"
                    children="Saiba mais"
                    to={`/perfil/${id}`}
                />
            </section>
        </Card>
    );
};

export default Restaurante;
