import styled from "styled-components";


const Container = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    width: 736px;
`

const Title = styled.h1`
    font-weight: 700;
    font-size:18px;
    line-height:27px;
    margin-bottom:8px;
`

const Li = styled.li`
    margin-top:16px
`

const Ul = styled.ul`
    
`

const A= styled.a`
    font-size:16px;
    line-height:24px;
`

const About = ()=>(
    <Container>
        <Ul data-testid="footer-firstUl"><Title>Lacrei Saúde</Title>
        <Li><A>Quem Somos</A></Li>
        <Li><A>Nosso Propósito</A></Li>
        <Li><A>Missão Visão e Valor</A></Li>
        <Li><A>Acessibilidade</A></Li>
        </Ul>
        <Ul data-testid="footer-secondUl"><Title>Saúde</Title>
        <Li><A>Buscar Atendimento</A></Li>
        <Li><A>Oferecer Atendimento</A></Li>
        </Ul>
        <Ul data-testid="footer-thirdUl"><Title>Segurança e Privacidade</Title>
        <Li><A>Política de Privacidade</A></Li>
        <Li><A>Termos de Uso</A></Li>
        <Li><A>Direitos de Titular</A></Li>
        </Ul>
    </Container>
)

export default About;