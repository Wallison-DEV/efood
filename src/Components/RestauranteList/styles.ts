import styled from 'styled-components'

import { Colors, breakpoints } from '../../styles'
import { Card } from '../Restaurante/styles'

export const Container = styled.section`
    padding: 26px 0 80px;
    ${Card} {
        width: 472px;
        background-color: ${Colors.white};
    }
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
    margin-top: 40px;

    @media (max-width: ${breakpoints.desktop}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
