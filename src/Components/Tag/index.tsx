import { TagContainer } from './styles'

export type TagProps = {
    children: string
}

const Tag = ({ children }: TagProps) => {
    return <TagContainer>{children}</TagContainer>
}

export default Tag
