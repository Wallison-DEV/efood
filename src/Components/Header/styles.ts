import styled, { keyframes } from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { Link } from 'react-router-dom'

const slideIn = keyframes`
    from {
        height: 0;
        opacity: 0;
    }
    to {
        height: auto;
        opacity: 1;
    }
`

export const HeaderBar = styled.header`
    background-repeat: repeat;
    background-size: 100%;
    height: 186px;
    padding: 24px 174px;
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.desktop}) {
        padding: 24px 48px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        padding: 24px 24px;
        height: auto;
    }
`
export const Links = styled.ul`
    margin-left: 0;
    display: flex;
    justify-content: flex-start;
    gap: 12px;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`

export const LinkItem = styled.li`
    margin-left: 0;
    a {
        display: block;
        padding: 16px 0;
        text-align: center;
        color: ${Colors.salmon};
        text-decoration: none;
        font-weight: bold;
    }
`
export const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    max-width: 1024px;
    width: 100%;

    a,
    span {
        color: ${Colors.salmon};
        text-decoration: none;
        font-weight: bold;
        font-size: 18px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
        nav {
            display: none;
        }
    }
`
export const NavBrand = styled(Link)`
    grid-column: 1;
`

export const NavLink = styled(Link)`
    grid-column: 1;
    font-size: 18px;

    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`

export const CartButton = styled.a`
    display: flex;
    cursor: pointer;
    justify-content: flex-end;
    align-items: center;

    img {
        display: none;
        width: 18px;
        height: 18px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        img {
            display: flex;
            margin-left: 4px;
        }
        span {
            display: none;
        }
    }
`

export const HamburguerWrapper = styled.div`
    position: absolute;
    top: 24px;
    left: 24px;
`

export const Hamburguer = styled.div`
    width: 32px;
    display: none;
    grid-column: 1;
    span {
        height: 2px;
        width: 100%;
        display: block;
        background-color: ${Colors.salmon};
        margin-bottom: 4px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`
export const NavMobile = styled.div`
    display: none;
    animation: ${slideIn} 0.3s ease;
    @media (max-width: ${breakpoints.tablet}) {
        &.is-open {
            display: block;
            animation: ${slideIn} 0.3s ease;
        }
    }
`
