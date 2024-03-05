import Logo from "./Logo";
import HeaderButtons from "./HeaderButtons";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    width: 100%;
    padding:16px 0px;

`

const Header = ()=>(
    <HeaderContainer>
        <Logo />
        <HeaderButtons />
    </HeaderContainer>
)

export default Header;
