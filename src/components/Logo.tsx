import React from 'react';
import styled from 'styled-components';

// Criando componentes estilizados usando styled-components
const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

const LogoText = styled.h1`
  color: green;
  font-size: 24px;
`;

const Logo = () => (
  <LogoContainer>
    <LogoText>LS</LogoText>
    <LogoText>Lacrei Saúde</LogoText>
  </LogoContainer>
);

export default Logo;
