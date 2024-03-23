import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Cores } from '../../styles'

export const ButtonLink = styled(Link)`
    color: ${Cores.bege};
    background-color: ${Cores.salmao};
    text-decoration: none;
    padding: 4px 6px;
    font-size: 14px;
    font-weight: 700;
    height: 24px;
    width: 88px;
    text-align: center;
    margin-top: 16px;
`
