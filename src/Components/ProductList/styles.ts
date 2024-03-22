import styled from 'styled-components'

import { ProductListProps } from '.'
import { Cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<
    Omit<ProductListProps, 'title' | 'produto'>
>`
    padding: 26px 0 80px;

    ${Card} {
        width: ${(props) => (props.page === 'home' ? '472px' : '320px')};
        background-color: ${Cores.branco};
        border: 1px solid ${Cores.salmao};
    }
`
export const List = styled.ul<Omit<ProductListProps, 'title' | 'produto'>>`
    display: grid;
    grid-template-columns: ${(props) =>
        props.page === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
    gap: 24px;
    margin-top: 40px;
`
export const Title = styled.h2`
    font-weight: bold;
    font-size: 18px;
`
