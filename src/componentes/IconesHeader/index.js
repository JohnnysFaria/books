import React from 'react';
import style from './style.module.css';
import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';

const icones = [perfil, sacola];

const index = () => {
  return (
    <ul className={style.icones}>
      {icones.map((icone) => (
        <li className={style.icone}>
          <img src={icone} alt="icone" />
        </li>
      ))}
    </ul>
  );
};

export default index;
