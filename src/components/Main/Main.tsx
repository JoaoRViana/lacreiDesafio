import styled from "styled-components";
import FirstLine from "./SalmonLine";

import LeftContent from "./LeftContent";


const MainContainer = styled.div`
    background-color: white;
    width: 100%;
    heigth: 603px;
`

const  Main = ()=>(
    <MainContainer>
        <FirstLine />
        <LeftContent/>
    </MainContainer>
);

export default Main;