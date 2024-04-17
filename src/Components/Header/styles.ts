import styled from 'styled-components'

import { Cores, breakpoints } from '../../styles'

export const HeaderBar = styled.header`
    background-repeat: no-repeat;
    background-size: 100%;
    height: 186px;
    padding: 24px 174px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 900;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1024px;
        width: 100%;
        @media (max-width: ${breakpoints.tablet}) {
            flex-direction: column;
        }
    }

    @media (max-width: ${breakpoints.desktop}) {
        padding: 24px 48px;
    }
`

export const CartButton = styled.a`
    display: flex;
    text-decoration: none;
    color: ${Cores.salmao};
    cursor: pointer;
    img {
        margin-left: 16px;
    }
`