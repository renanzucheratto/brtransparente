import {
    ContainerCard,
    TitleCard,
    DescriptionCard
} from './styles'
import Button from './../Button/index'

type CardProps = {
    title: string;
    description: string;
    icon: any;
    url: string;
    labelButton: string;
    variant?: 'shadow' | 'outline' | undefined;
}

function Card(props: CardProps) {
    return <ContainerCard type={props.variant ? props.variant : 'shadow'}>
        <TitleCard>{props.title}</TitleCard>
        <DescriptionCard style={{marginTop: '5px'}}>{props.description}</DescriptionCard>
        <Button style={{marginTop: '10px'}} url={props.url} label={props.labelButton} />
    </ContainerCard>
}

export default Card