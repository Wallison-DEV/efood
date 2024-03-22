import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.footer`
    background-color: ${Cores.rosa};
    padding: 32px 0;
    font-size: 14px;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            max-width: 720px;
            text-align: center;
        }
    }
`
export const Links = styled.ul`
    display: flex;
    margin-top: 32px;
    justify-content: center;
`
export const Link = styled.a`
    text-decoration: none;
    margin-right: 8px;
`

export const FooterSection = styled.div`
    margin-bottom: 64px;
`
