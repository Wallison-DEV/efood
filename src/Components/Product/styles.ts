import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
    position: relative;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    ${TagContainer} {
        margin-right: 8px;
    }

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-weight: bold;
        font-size: 16px;
    }
`

export const Titulo = styled.h3`
    margin: 16px 0 8px;
`

export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
`
export const Infos = styled.div`
    position: absolute;
    right: 16px;
    top: 16px;
`

export const Ratting = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
