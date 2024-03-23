import { ButtonLink } from './styles'

type ButtonProps = {
    title: string
    to?: string
    children: string
}

const Button = ({ title, children, to }: ButtonProps) => {
    return (
        <ButtonLink to={to as string} title={title}>
            {children}
        </ButtonLink>
    )
}

export default Button
