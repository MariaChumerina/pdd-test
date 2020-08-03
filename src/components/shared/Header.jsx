import React from 'react';
import './Header.css';
import HeaderDummy from './HeaderDummy.jsx';

export default function Header() {
  return(
      <>
        <HeaderDummy />
        <header>
          <h1 className="title">
            Тест на знание правил дорожного движения
          </h1>
        </header>
      </>
  );
}