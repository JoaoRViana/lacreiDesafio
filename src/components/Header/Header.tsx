import Logo from "./Logo";
import HeaderButtons from "./HeaderButtons";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 96px;
    background: white;

`

const Header = ()=>(
    <HeaderContainer>
        <Logo />
        <HeaderButtons />
    </HeaderContainer>
)

export default Header;
