import styled from "styled-components";
import TextContent from "./TextContent";
import MainButtons from "./MainButtons";
import SalmonLine from "./SalmonLine";


const Container = styled.div`
    width:60%;
`

const LeftContent = ()=>(
    <Container>
        <TextContent />
        <SalmonLine />
        <MainButtons />
    </Container>
);

export default LeftContent;