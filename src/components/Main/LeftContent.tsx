import styled from "styled-components";
import TextContent from "./TextContent";
import MainButtons from "./MainButtons";
import BigLine from "./BigLine";


const Container = styled.div`
    width:60%;
    height:100%;
    margin-left:15px;
    background-color:rgb(200,400,100);
    margin-right:12%;
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