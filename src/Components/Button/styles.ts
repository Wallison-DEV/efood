import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Cores } from '../../styles'


export type ButtonProps = {
    type: 'btnModal' | 'btnProduct'
}

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
    cursor: pointer;
`

export const Button = styled.button<ButtonProps>`
    display: block;
    width: ${(props) => (props.type === 'btnModal' ? '218px' : '304px')};
    height: 24px;
    font-weight: 700;
    font-size: 14px;
    color: ${Cores.salmao};
    background-color: ${Cores.rosa};
    border: none;
    outline: none;
    padding: 4px 7px;
    cursor: pointer;
`
