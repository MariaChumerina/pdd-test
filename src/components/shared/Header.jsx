import React from 'react';
import './Header.css';
import HeaderDummy from './HeaderDummy.jsx';

export default function Header() {
  return(
      <>
        <HeaderDummy />
        <header>
          <div className="container header">
            <h1 className="title">
              Тест на знание правил дорожного движения
            </h1>
          </div>
        </header>
      </>
  );
}