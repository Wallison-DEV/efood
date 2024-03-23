import styled from 'styled-components'

import { ProductListProps } from '.'

export const Container = styled.section<
    Omit<ProductListProps, 'title' | 'produtos'>
>`
    padding: 56px 0 120px;
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
`
export const Title = styled.h2`
    font-weight: bold;
    font-size: 18px;
`
