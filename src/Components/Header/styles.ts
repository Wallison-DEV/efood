import styled from 'styled-components'

import { Cores } from '../../styles'

export const HeaderBar = styled.header`
    background-repeat: no-repeat;
    background-size: 100%;
    height: 186px;
    padding: 24px 174px;
    display: flex;
    align-items: center;

    font-size: 18px;
    font-weight: 900;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`
export const LinkCart = styled.a`
    display: flex;
    text-decoration: none;
    color: ${Cores.salmao};
    img {
        margin-left: 16px;
    }
`
