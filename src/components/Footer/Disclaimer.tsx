import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

const TextContainer = styled.div`

`

const UpButton = styled.div`
    width: 48px; 
    height: 48px;
    background-image: url("/assets/UpButton.png");
    background-size: cover; 
    background-position: center;
    box-shadow: 0px 5px 10px 0px #0000004D;
    padding: 10px 12px;
    border-radius: 8px;
    border: 2px;
    `

const TextDisclaimer = styled.p`
    max-width:715px;
    font-size:14px;
    line-height:21px;
`

const TextCopyright = styled.p`
    max-width:715px;
    font-size:14px;
    line-height:21px;
    margin-top:24px;
`


const Disclaimer = ()=>(
    <Container>
        <TextContainer>
            <TextDisclaimer>
                A lacrei não oferece tratamento médico emergencial. Em caso de emergência procure o hospital
                mais próximo. 
            </TextDisclaimer>
            <TextDisclaimer>
                Em caso de problemas psicológicos, ligue para 188 (CVVV) ou acesse o site
                www.cvv.org.br
            </TextDisclaimer>
            <TextCopyright>
                Copyright ©️ 2021 Lacrei. Todos os direitos reservados. CNPJ:51.265.351/0001-65
            </TextCopyright>
        </TextContainer>
        <UpButton />
    </Container>
)

export default Disclaimer;
