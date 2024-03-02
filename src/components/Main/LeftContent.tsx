import styled from "styled-components";
import TextContent from "./TextContent";
import MainButtons from "./MainButtons";
import BigLine from "./BigLine";


const Container = styled.div`
    width:60%;
    display:flex;
    flex-wrap:wrap;
`

const LeftContent = ()=>(
    <Container>
        <BigLine height={80} />
        <TextContent />
        <BigLine height={32} />
        <MainButtons />
        <BigLine height={80} />
    </Container>
);

export default LeftContent;