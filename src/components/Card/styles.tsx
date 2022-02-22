import { styled } from "../../config/appStyle"
import { NavLink } from "react-router-dom"

const ContainerCard = styled('div', {
    borderRadius: '$2',
    padding: '$4',
    paddingTop: '$5',
    variants: {
        type: {
            shadow: {
                boxShadow: '$1'
            },
            outline: {
                borderWidth: '$1',
                borderColor: '$gray6',
                borderStyle: '$1',
                backgroundColor: '$gray1'
            }
        }
    }
})

const TitleCard = styled('p', {
    fontFamily: '$black',
    fontSize: '$7',
    marginBottom: '$1',
    textTransform: 'uppercase'
})

const DescriptionCard = styled('p', {
    fontSize: '$4',
    display: 'inline-block'
})

export {
    ContainerCard,
    TitleCard,
    DescriptionCard
}