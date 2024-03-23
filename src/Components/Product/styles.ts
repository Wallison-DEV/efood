import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardProduct = styled.div`
    position: relative;
    padding: 8px;
    display: flex;
    flex-direction: column;
    height: 338px;
    width: 320px;
    justify-content: space-between;

    color: ${Cores.rosa};
    background-color: ${Cores.salmao};

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
    }
`
export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    padding-top: 8px;
    padding-bottom: 8px;
`
export const Button = styled.button`
    display: block;
    width: 304px;
    height: 24px;
    font-weight: 700;
    size: 14px;
    color: ${Cores.salmao};
    background-color: ${Cores.rosa};
    border: none;
    outline: none;
    padding: 4px 7px;
`
