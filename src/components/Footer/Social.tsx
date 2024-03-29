import styled from "styled-components";

const Container = styled.div`
    max-width: 240px;
    display:flex;
    flex-wrap:wrap;
`;
const Button = styled.button``

const LinksContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 240px;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    width: 170px;
    height: 48px;
    background-image: url("/assets/FooterLogo.png");
    background-size: cover; 
    background-position: center;
    margin-bottom:56px;
`;

const Email = styled.div`
    width: 40px; 
    height: 40px;
    background-image: url("/assets/Email.png");
    background-size: cover; 
    background-position: center;
`;

const Facebook = styled.div`
    width: 40px; 
    height: 40px;
    background-image: url("/assets/Facebook.png");
    background-size: cover; 
    background-position: center;
`;

const Instagram = styled.div`
    width: 40px; 
    height: 40px;
    background-image: url("/assets/Instagram.png");
    background-size: cover; 
    background-position: center;
`;

const Linkedin = styled.div`
    width: 40px; 
    height: 40px;
    background-image: url("/assets/Linkedin.png");
    background-size: cover; 
    background-position: center;
`;

const Social = () => (
    <Container>
        <Logo data-testid="footer-logo"/>
        <LinksContainer>
            <Button data-testid="footer-facebook">
                <Facebook />
            </Button>
            <Button data-testid="footer-instagram">
                <Instagram />
            </Button>
            <Button data-testid="footer-linkedin">
                <Linkedin />
            </Button>
            <Button data-testid="footer-email">
                <Email />
            </Button>
        </LinksContainer>
    </Container>
);

export default Social;
