import React from 'react';
import Logo from '../Logo/index';
import OpcoesHeader from '../OpcoesHeader/index';
import IconesHeader from '../IconesHeader/index';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const index = () => {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
};

export default index;
