import styled from "styled-components";
import Social from "./Social";
import About from "./About";

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width: 100%;
`;

const Footer = () => (
    <Container>
        <Social/>
        <About />
    </Container>
);

export default Footer;
