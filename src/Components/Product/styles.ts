import styled from 'styled-components'
import { Colors } from '../../styles'

export const CardProduct = styled.div`
    position: relative;
    padding: 8px;
    display: flex;
    flex-direction: column;
    height: 338px;
    width: 320px;
    justify-content: space-between;

    color: ${Colors.pink};
    background-color: ${Colors.salmon};

    h3 {
        font-size: 16px;
        font-weight: 900px;
    }

    img {
        width: 100%;
        height: 167px;
        object-fit: cover;
        margin-bottom: 8px;
    }

    .cardButton {
        position: absolute;
        bottom: 8px;
        left: 8px;
        max-width: 304px;
    }
`
export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    padding-top: 8px;
    padding-bottom: 8px;
`
