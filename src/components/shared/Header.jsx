import React from 'react';
import './Header.css';
import HeaderDummy from './HeaderDummy.jsx';
import { Link } from 'react-router-dom';

export default function Header({history}) {
  const renderLink = () => {
    return (
      <Link className="header-link" to='/' >
        На главную
      </Link>
    );
  }

  return(
    <>
      <HeaderDummy />
      <header>
        <div className="container header">
          <h1 className="title">
            Тест на знание правил дорожного движения
          </h1>
          {history.location.pathname.length > 1 ? renderLink() : ''}
        </div>
      </header>
    </>
  );
}