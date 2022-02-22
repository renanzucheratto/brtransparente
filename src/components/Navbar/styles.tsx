import { styled, css } from "../../config/appStyle"
import { SunIcon } from '@radix-ui/react-icons'
import { NavLink } from "react-router-dom"

const Sunicon = styled(SunIcon, {
    marginLeft: '$3',
    cursor: 'pointer',
    color: '$gray12',
    '&:hover': {
        color: '$gray11'
    }
})

const DividerMenu = styled('div', {
    width: '1px',
    height: '$3',
    backgroundColor: '$gray10',
    marginLeft: '$3'
})

const Menu = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
})

const Logo = styled('a', {
    display: 'flex',
    alignItems: 'center',
    color: '$gray12',
    '&:hover': {
        textDecoration: 'none',
        color: '$gray12',
    },
    'span': {
        marginLeft: '$2',
        fontSize: '$7',
        fontFamily: '$extraBold',
    }
})

const Nav = styled('nav', {
    padding: '$3 0',
})

const Content = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Img = styled('img', {
    width: '$6'
})

const LinkApp = styled(NavLink, {
    marginLeft: '$3',
    color: '$11',
    fontFamily: '$regular',
    '&:first-child': {
        marginLeft: 0
    },
    '&:hover': {
        textDecoration: 'none',
    },
    variants: {
        state: {
            disabled: {
                fontFamily: '$light',
                color: '$gray10',
                '&:hover': {
                    color: '$gray9'
                }
            },
            active: {
                color: '$gray12',
                textDecoration: 'underline',
                '&:hover': {
                    color: '$gray11'
                }
            }
        }
    }
})

export {
    Nav,
    Content,
    LinkApp,
    Img,
    Logo,
    Sunicon,
    DividerMenu,
    Menu
}