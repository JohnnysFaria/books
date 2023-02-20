import React from 'react';
import style from './style.module.css';
import logo from '../../imagens/logo.svg';

const index = () => {
  return (
    <div className={style.logo}>
      <img src={logo} alt="logo" className={style.logoImg} />
      <p>
        {' '}
        <strong>Alura</strong>Books
      </p>
    </div>
  );
};

export default index;
