import styled from "styled-components";
import BigLine from "./BigLine";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";


const MainContainer = styled.div`
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    
`
const ContentsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    width: 100%;
`


const  Main = ()=>(
    <MainContainer>
        <BigLine height={48} />
        <ContentsContainer>
        <LeftContent/>
        <RightContent/>
        </ContentsContainer>
        <BigLine height={64} />
    </MainContainer>
);

export default Main;