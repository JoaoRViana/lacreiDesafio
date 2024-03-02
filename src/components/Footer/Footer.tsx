import styled from "styled-components";
import Social from "./Social";
import About from "./About";
import Disclaimer from "./Disclaimer";
import BigLine from "../Main/BigLine";

const Container = styled.div`
    display:block;
    width: 100%;
`;

const Divisor = styled.div`
    width:100%;
    border-bottom: #B2DFD0 1px solid;
`

const SocialAboutContainer = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width: 100%;
    height: 195px;
`

const Footer = () => (
    <Container>
        <BigLine height={48}/>
        <SocialAboutContainer>
            <Social/>
            <About />
        </SocialAboutContainer>
        <BigLine height={48}/>
        <Divisor />
        <BigLine height={48}/>
        <Disclaimer />
    </Container>
);

export default Footer;
