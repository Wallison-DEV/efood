import styled from 'styled-components'
import { Colors } from '../../styles'

import excluirIcon from '../../assets/icons/lixeira.png'

export const CartItem = styled.div`
    background-color: ${Colors.pink};
    height: 100px;
    display: flex;
    position: relative;
    padding: 8px;
    color: ${Colors.salmon};
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 40px;
    }

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    h3 {
        font-size: 18px;
        font-weght: 900;
        margin-bottom: 16px;
    }
    span {
        display: block;
        font-size: 14px;
        font-weght: 400;
    }
`
export const ButtonDiv = styled.div`
    position: absolute;
    bottom: 8px;
    right: 8px;
    display: flex;
    gap: 4px;
    align-items: center;
    text-align: center;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.3rem;
    }
    .lixeira {
        background-image: url(${excluirIcon});
    }
`
export const CartDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    @media (max-width: 400px) {
        padding-top: 32px;
    }
`
export const CloseIcon = styled.img`
    position: absolute;
    max-width: 16px;
    max-height: 16px;
    top: 0;
    right: 8px;
    cursor: pointer;
`
