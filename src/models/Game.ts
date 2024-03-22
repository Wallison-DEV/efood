class Game {
    id: number
    title: string
    description: string
    infos: string[]
    image: string
    rating: number

    constructor(
        id: number,
        title: string,
        description: string,
        infos: string[],
        image: string,
        rating: number
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.infos = infos
        this.image = image
        this.rating = rating
    }
}

export default Game
