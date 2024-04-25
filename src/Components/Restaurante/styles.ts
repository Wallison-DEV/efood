import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Colors, breakpoints } from '../../styles'

export const Card = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 472px;
    height: 398px;

    @media (max-width: ${breakpoints.desktop}) {
        max-width: 100%;
        height: 432px;
        justify-content: center;
    }

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

        @media (max-width: ${breakpoints.tablet}) {
            height: 100%;
        }

        border-bottom: 1px solid ${Colors.salmon};
        border-left: 1px solid ${Colors.salmon};
        border-right: 1px solid ${Colors.salmon};

        h3 {
            font-size: 18px;
        }
        > div {
            display: flex;
            flex-direction: row;
            align-items: center;
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
