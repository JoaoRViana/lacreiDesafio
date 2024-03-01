import styled from "styled-components";


const ContentContainer = styled.div`
    min-height: 250px;
    width: 488px;
    display:flex;
    flex-wrap:wrap;
    padding:0px 5px
`

const Title = styled.h1`
    font-size: 52px;
    color: rgb(0 0 0);
    font-weight: 600;
`
const Text = styled.h3``


const TextContent = ()=>(
    <ContentContainer>
        <Title>Junte-se à nossa comunidade</Title>
        <Text>Encontre atendimento clínico de qualidade
            ou entre para o time de profissionais da Lacrei Saúde.
        </Text>
    </ContentContainer>
)

export default TextContent