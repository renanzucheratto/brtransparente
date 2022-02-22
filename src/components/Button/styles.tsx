import { NavLink } from "react-router-dom"
import { styled } from "../../config/appStyle"

const Button = styled(NavLink, {
    outline: 'none',
    display: 'inline-block',
    borderRadius: '$2',
    textTransform: 'uppercase',
    fontFamily: '$bold',
    '&:hover, &:active': {
        textDecoration: 'none',
    },
    variants:{
        size: {
            normal: {
                fontSize: '$2',
                padding: '$1 $3',
            },
            lg: {
                padding: '$2 $5',
                fontSize: '$4'
            }
        },
        color: {
            primary: {
                backgroundColor: '$violet10',
                color: '$gray1!important',
                '&:hover': {
                    backgroundColor: '$violet9'
                }
            },
            secondary: {
                backgroundColor: '$orange10',
                '&:hover': {
                    backgroundColor: '$orange9'
                }
            },
            outline_primary: {
                background: 'transparent',
                borderWidth: '$1',
                borderColor: '$violet9',
                color: '$violet10',
                borderStyle: '$1',
                '&:hover': {
                    borderColor: '$violet10',
                    color: '$violet10'
                }
            }
        }
    }
})

export default Button