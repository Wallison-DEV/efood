import * as S from './styles'

export type ButtonProps = {
    type: 'button' | 'link' | 'submit'
    title: string
    maxwidth?: string
    margintop?: string
    to?: string
    onClick?: () => void
    children: string
    disabled?: boolean
    className?: string
}

const Button = ({
    type,
    title,
    children,
    onClick,
    maxwidth,
    margintop,
    className,
    to,
    disabled,
}: ButtonProps) => {
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }
    if (type === 'button' || type === 'submit') {
        return (
            <S.ButtonContainer
                type={type}
                title={title}
                maxwidth={maxwidth}
                margintop={margintop}
                onClick={handleClick}
                disabled={disabled}
                className={className}
            >
                {children}
            </S.ButtonContainer>
        )
    }

    return (
        <S.ButtonLink
            to={to as string}
            title={title}
            onClick={onClick ? handleClick : undefined}
            className={className}
        >
            {children}
        </S.ButtonLink>
    )
}

export default Button
