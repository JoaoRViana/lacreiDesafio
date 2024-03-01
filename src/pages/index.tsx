import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import styled from "styled-components";

const HomeContainer = styled.main`
  display: block;
  height: 100vh;
  flex-wrap: wrap;
  margin: 138px;

`


const Home = ()=>(
  <HomeContainer>
   <Header />
    <Main/>
  </HomeContainer>
)

export default Home;