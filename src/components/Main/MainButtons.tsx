import styled from "styled-components";


const MainButtonsContainer  = styled.div`
    width: 50%;
    display:flex;
    justify-content: space-between;
    padding:0px 20px

`

const ButtonWithBackground = styled.button`
    background-color: green;
    color : white;
    padding: 5px 10px;
    border-radius: 0.5rem;
`

const NoBackgroundButton = styled.button`
    background-color: white;
    color: green;
    border: 2px green solid;
    padding: 5px 10px;
    border-radius: 0.5rem;
`

const MainButtons = ()=>(
    <MainButtonsContainer>
        <ButtonWithBackground>Buscar atendimento </ButtonWithBackground>
        <NoBackgroundButton>Oferecer atendimento </NoBackgroundButton>
    </MainButtonsContainer>
)

export default MainButtons;