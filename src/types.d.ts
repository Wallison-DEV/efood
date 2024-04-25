declare type RestauranteProps = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string[]
    avaliacao: number
    descricao: string
    capa: string
    cardapio: {
        foto: string
        preco: number
        id: number
        nome: string
        description: string
        porcao: string
    }[]
}

declare type CardapioItem = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
    quantity?: number
}

declare type ProductProps = {
    cardapio: CardapioItem[]
}

declare type ProductListProps = {
    produtos: ProductProps[]
}
