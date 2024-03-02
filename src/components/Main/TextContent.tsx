import styled from "styled-components";


const ContentContainer = styled.div`
    height: 250px;
    width: 488px;
    display:flex;
    flex-wrap:wrap;
`

const Title = styled.h1`
    font-size: 40px;
    color: rgb(0 0 0);
    font-weight: 600;
`
const Text = styled.h3`
    min-height: 100px;
    font-size: 25px;
    color: rgb(0 0 0);
    `

const SmallGreenLine = styled.div`
    border-bottom: rgb(0,255,0) 2px solid;
    width: 170px;
    height:3px;
    margin-bottom:15px;
`

const TextContent = ()=>(
    <ContentContainer>
        <Title>Junte-se à</Title>
        <Title>nossa comunidade</Title>
        <SmallGreenLine />
        <Text>Encontre atendimento clínico de qualidade
            ou entre para o time de profissionais da Lacrei Saúde.
        </Text>
    </ContentContainer>
)

export default TextContent