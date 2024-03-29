import styled from "styled-components";


const ContentContainer = styled.div`
    max-width: 488px;
    display:flex;
    flex-wrap:wrap;
`

const Title = styled.h1`
    font-size: 45px;
    color: rgb(0 0 0);
    font-weight: 700;
    line-height: 57,6;
`
const Text = styled.h3`
    min-height: 100px;
    font-size: 23px;
    color: rgb(0 0 0);
    font-weight: 400;
    line-height:36px;
    `

const SmallGreenLine = styled.div`
    border-bottom: #018762 2px solid;
    width: 160px;
    height:2px;
    margin-bottom:15px;
`

const TextContent = ()=>(
    <ContentContainer data-testid="main-textContent">
        <Title>Junte-se à</Title>
        <Title>nossa comunidade</Title>
        <SmallGreenLine />
        <Text>Encontre atendimento clínico de qualidade
            ou entre para o time de profissionais da Lacrei Saúde.
        </Text>
    </ContentContainer>
)

export default TextContent