import styled from "styled-components";


const MainButtonsContainer  = styled.div`
    width: 488px;
    display:flex;
`

const ButtonWithBackground = styled.button`
    background-color: green;
    font-size:16px;
    color : white;
    width:232px;
    height:48px;
    border-radius: 0.5rem;
    margin-right: 24px
`

const NoBackgroundButton = styled.button`
    background-color: white;
    color: green;
    font-size:16px;
    border: 2px green solid;
    width:232px;
    height:48px;
    border-radius: 0.5rem;

`

const MainButtons = ()=>(
    <MainButtonsContainer>
        <ButtonWithBackground>Buscar atendimento </ButtonWithBackground>
        <NoBackgroundButton>Oferecer atendimento </NoBackgroundButton>
    </MainButtonsContainer>
)

export default MainButtons;