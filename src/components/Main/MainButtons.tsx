import styled from "styled-components";


const MainButtonsContainer  = styled.div`
    width: 488px;
    display:flex;
`

const ButtonWithBackground = styled.button`
    background-color: #018762;
    font-size:18px;
    line-height:27px;
    font-weight: 700;
    color : white;
    width:232px;
    height:48px;
    margin-right: 24px;
    border-radius: 8px;

`

const NoBackgroundButton = styled.button`
    background-color: white;
    color: #018762;
    font-size:18px;
    line-height:27px;
    font-weight: 700;
    border: 2px #018762 solid;
    width: 232px;
    height: 48px;
    border-radius: 8px;


`

const MainButtons = ()=>(
    <MainButtonsContainer>
        <ButtonWithBackground>Buscar atendimento </ButtonWithBackground>
        <NoBackgroundButton>Oferecer atendimento </NoBackgroundButton>
    </MainButtonsContainer>
)

export default MainButtons;