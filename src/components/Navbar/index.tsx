import {
    NavLink,
    useMatch,
    useResolvedPath,
} from 'react-router-dom'
import {
    Nav,
    Content,
    LinkApp,
    Img,
    Logo,
    Sunicon,
    DividerMenu,
    Menu
} from './styles'
import LogoImg from '../../assets/images/brasil.png'
import type { LinkProps } from "react-router-dom";

function CustomLink({children, to}: LinkProps) {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname, end: true })

    return <LinkApp state={match ? 'active':'disabled'} to={to}>{children}</LinkApp>
}

function Navbar(){
    

    return <Nav>
        <div className="container">
            <Content>
                <Logo as={NavLink} to="/">
                    <Img src={LogoImg} />
                    <span>BRTRANSPARENTE</span>
                </Logo>
                <Menu>
                    <CustomLink to="/deputados">Deputados</CustomLink>
                    <CustomLink to="/votacoes">Votações</CustomLink>
                    <DividerMenu />
                    <Sunicon />
                </Menu>
            </Content>
        </div>
    </Nav>
}

export default Navbar 