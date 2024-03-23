import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Cores } from '../../styles'

export const Card = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 472px;
    height: 398px;

    ${TagContainer} {
    }
    > img {
        width: 100%;
        height: 217px;
        object-fit: cover;
    }
    section {
        width: 100%;
        height: 181px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8px;

        border-bottom: 1px solid ${Cores.salmao};
        border-left: 1px solid ${Cores.salmao};
        border-right: 1px solid ${Cores.salmao};
        > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-weight: 700;
            font-size: 18px;
        }
    }
`

export const Descricao = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    display: block;
    margin-top: 16px;
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
