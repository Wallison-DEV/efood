import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.footer`
    background-color: ${Colors.pink};
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
    cursor: pointer;
`

export const FooterSection = styled.div`
    margin-bottom: 64px;
`
