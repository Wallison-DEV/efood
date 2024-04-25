import * as S from './styles'
import Button from '../Button/index'

const Product = ({ cardapio }: ProductProps) => {
    return (
        <S.CardProduct>
            {cardapio.map((item) => {
                const truncateDescription =
                    item.descricao.length > 125
                        ? item.descricao.substring(0, 125) + '...'
                        : item.descricao

                return (
                    <div key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <h3>{item.nome}</h3>
                        <S.Descricao>{truncateDescription}</S.Descricao>
                        <Button
                            type="button"
                            title="Saiba mais"
                            className="cardButton"
                        >
                            Mais detalhes
                        </Button>
                    </div>
                )
            })}
        </S.CardProduct>
    )
}

export default Product
