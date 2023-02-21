import React from 'react';
import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImagem = styled.img`
  margin-right: 10px;
`;

const index = () => {
  return (
    <LogoContainer>
      <LogoImagem src={logo} alt="logo" />
      <p>
        {' '}
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
};

export default index;
