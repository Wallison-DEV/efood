import styled from 'styled-components'

import { Cores } from '../../styles'

export const HeaderBar = styled.header`
    background-color: ${Cores.rosa};
    padding: 24px 174px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LinkCart = styled.a`
    display: flex;
    text-decoration: none;
    font-weight: bold;
    size: 18px;
    color: ${Cores.salmao};
    img {
        margin-left: 16px;
    }
`
export const Title = styled.h3`
    font-size: 16px;
    font-weight: bold;
`
