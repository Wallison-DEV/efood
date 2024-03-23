import styled from 'styled-components'

export const Imagem = styled.div`
    width: 100%;
    height: 384px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: bold;

    .container {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        padding: 40px 0;
    }
`

export const Titulo = styled.h2`
    font-size: 36px;
    max-width: 540px;
`
