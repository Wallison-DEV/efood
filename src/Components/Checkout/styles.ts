import styled from 'styled-components'

import { Colors, breakpoints } from '../../styles'

type InputGroupProps = {
    maxwidth?: string
}
type RowProps = {
    margintop?: string
}

export const CheckoutTitle = styled.h2`
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
`

export const InputGroup = styled.div<InputGroupProps>`
    flex: auto;
    margin-top: 8px;
    max-width: ${(props) => props.maxwidth || 'auto'};

    .margin-top-checkout {
        margin-top: 24px;
    }
    .align-end {
        display: flex;
        justify-content: flex-end;
        auto-align: flex-end;
        margin-left: auto;
    }

    input,
    select {
        background-color: ${Colors.white};
        border: 1px solid ${Colors.white};
        outline: none;
        height: 32px;
        padding: 0 8px;
        width: 100%;
        font-weight: 700;
        font-size: 14px;
        color: #4b4b4b;

        &.error {
            border: 1px solid red;
        }
    }
    label {
        color: ${Colors.pink};
        font-size: 14px;
        font-size: 700;
        margin-bottom: 8px;
        display: block;
    }
    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 16px;
        max-width: 100%;

        .align-end {
            display: block;
        }
    }
`
export const Row = styled.div<RowProps>`
    display: flex;
    align-items: flex-end;
    width: 100%;
    column-gap: 34px;
    margin-top: ${(props) => props.margintop || '0'};

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`
export const SuccessDiv = styled.div`
    display: flex;
    flex-direction: column;
`
