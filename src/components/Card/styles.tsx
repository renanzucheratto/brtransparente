import { styled } from "../../config/appStyle"
import { NavLink } from "react-router-dom"

const ContainerCard = styled('div', {
    borderRadius: '$2',
    borderWidth: '$1',
    borderColor: '$gray6',
    borderStyle: '$1',
    padding: '$3',
    paddingTop: '$6'
})

const ButtonCard = styled(NavLink, {
    backgroundColor: '$violet10',
    border: 'none',
    fontSize: '$2',
    color: '$gray1!important',
    padding: '$1 $3',
    display: 'inline-block',
    borderRadius: '$2',
    textTransform: 'uppercase',
    fontFamily: '$bold',
    marginTop: '$2',
    '&:hover, &:active': {
        textDecoration: 'none',
        backgroundColor: '$violet9'
    }
})

const TitleCard = styled('p', {
    fontFamily: '$black',
    fontSize: '$8',
    marginBottom: '$1',
    textTransform: 'uppercase'
})

const DescriptionCard = styled('p', {
    fontSize: '$4'
})

export {
    ContainerCard,
    ButtonCard,
    TitleCard,
    DescriptionCard
}