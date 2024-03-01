import Logo from "./Logo";
import HeaderButtons from "./HeaderButtons";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 96px;
    padding:0px 20px;
`

const Header = ()=>(
    <HeaderContainer>
        <Logo />
        <HeaderButtons />
    </HeaderContainer>
)

export default Header;
