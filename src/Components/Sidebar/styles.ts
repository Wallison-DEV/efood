import styled from 'styled-components'

import { ButtonContainer } from '../Button/styles'
import { Colors } from '../../styles'

export const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
`

export const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    z-index: 1;
    display: none;

    &.is-open {
        display: flex;
    }

    .empty-text {
        font-size: 14px;
        line-height: 22px;
        color: ${Colors.white};
        text-align: center;
        display: block;
    }
`

export const SidebarDiv = styled.aside`
    max-width: 360px;
    width: 100%;
    padding: 32px 8px 0;
    background-color: ${Colors.salmon};
    overflow-y: scroll;
    z-index: 1;

    & > div {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 700;
        color: ${Colors.pink};
    }

    ${ButtonContainer} {
        width: 100%;
    }
`
