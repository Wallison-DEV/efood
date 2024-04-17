import styled from "styled-components";
import { Cores } from "../../styles";

import excluirIcon from '../../assets/icons/lixeira.png'
import { Button } from "../Button/styles";

export const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open{
        display: flex;
    }
`

export const Sidebar = styled.aside`
    max-width: 360px;
    width: 100%;
    padding: 32px 8px 0;
    background-color: ${Cores.salmao};
    overflow-y: scroll;
    z-index: 1;

    &>div{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 700;
        color: ${Cores.rosa};
    }

    ${Button} {
        width: 100%;
        margin-top: 16px;
    }
`

export const CartItem = styled.div`
    background-color: ${Cores.rosa};
    height: 100px;
    display: flex;
    position: relative;
    padding: 8px;
    color: ${Cores.salmao};
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

    button {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 16px;
        height: 16px;
        background-image: url(${excluirIcon});
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`