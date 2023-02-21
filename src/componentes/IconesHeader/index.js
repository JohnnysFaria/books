import React from 'react';
import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];

const index = () => {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="icone" />
        </Icone>
      ))}
    </Icones>
  );
};

export default index;
