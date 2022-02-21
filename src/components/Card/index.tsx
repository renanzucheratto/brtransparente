import {
    ContainerCard,
    ButtonCard,
    TitleCard,
    DescriptionCard
} from './styles'

type CardProps = {
    title: string;
    description: string;
    icon: any;
    url: string;
    labelButton: string;
}

function Card(props: CardProps) {
    return <ContainerCard>
        <TitleCard>{props.title}</TitleCard>
        <DescriptionCard>{props.description}</DescriptionCard>
        <ButtonCard to={props.url}>{props.labelButton}</ButtonCard>
    </ContainerCard>
}

export default Card