import Header from "@/components/Header";
import styled from "styled-components";

const MainContainer = styled.main`
  display:flex;
  justify-content:center;
  align-items:center;
`
const HeaderContainer = styled.div`
  background: white;
  margin:138px;
  width:100%;
  height:100%;
`
const Home = ()=>(
  <MainContainer>
    <HeaderContainer><Header /></HeaderContainer>
  </MainContainer>
)

export default Home;