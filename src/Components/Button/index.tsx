import { ButtonLight, ButtonLink } from './styles'

type ButtonProps = {
    type: 'light' | 'dark'
    title: string
    to?: string
    onClick?: () => void
    children: string
}

const Button = ({ type, title, children, onClick, to }: ButtonProps) => {
    if (type == 'light') {
        return (
            <ButtonLight type="button" title={title} onClick={onClick}>
                {children}
            </ButtonLight>
        )
    }

    return (
        <ButtonLink to={to as string} title={title}>
            {children}
        </ButtonLink>
    )
}

export default Button
