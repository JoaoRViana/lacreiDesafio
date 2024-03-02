import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center
`

const HeaderLogo = styled.div`
    width: 203px;
    height: 24px;
    background-image: url("/assets/HeaderLogo.png");
    background-size: cover; 
    background-position: center;
`;


const Logo = () => (
  <Container>
      <HeaderLogo/>
  </Container>
);

export default Logo;
