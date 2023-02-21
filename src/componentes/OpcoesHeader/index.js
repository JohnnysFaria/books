import React from 'react';
import style from './style.module.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const index = () => {
  return (
    <ul className={style.opcoes}>
      {textoOpcoes.map((texto) => (
        <li className={style.opcao}>
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
};

export default index;
