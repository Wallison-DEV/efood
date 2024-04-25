import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors, breakpoints } from '../../styles'

import { ButtonProps } from '.'

const filteredStyles = (props: ButtonProps) => css`
    max-width: ${props.maxwidth || 'auto'};
    margin-top: ${props.margintop || '16px'};
`

export const ButtonLink = styled(Link)`
    color: ${Colors.beige};
    background-color: ${Colors.salmon};
    text-decoration: none;
    padding: 4px 6px;
    font-size: 14px;
    font-weight: 700;
    height: 24px;
    width: 88px;
    text-align: center;
    margin-top: 16px;
`

export const ButtonContainer = styled.button<ButtonProps>`
    display: block;
    width: 100%;
    height: 24px;
    font-weight: 700;
    font-size: 14px;
    color: ${Colors.salmon};
    background-color: ${Colors.pink};
    border: none;
    outline: none;
    padding: 4px 7px;
    cursor: pointer;

    ${filteredStyles}
    @media (max-width: ${breakpoints.tablet}) {
        max-width: 100%;
    }
`
