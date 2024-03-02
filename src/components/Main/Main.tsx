import styled from "styled-components";
import BigLine from "./BigLine";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";


const MainContainer = styled.div`
    background-color: green;
    width: 100%;
    heigth: 603px;
`
const ContentsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:491px;
    background-color:red;
    justify-content: space-between
    width: 100%;
`


const  Main = ()=>(
    <MainContainer>
        <BigLine height={48} />
        <ContentsContainer>
        <LeftContent/>
        <RightContent/>
        </ContentsContainer>
        
    </MainContainer>
);

export default Main;