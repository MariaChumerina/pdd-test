import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import HeaderDummy from './HeaderDummy.jsx';
import { Link } from 'react-router-dom';

export default function Header({ history }) {
  const renderLink = () => (
    <Link className="header-link" to="/">
      Главная
    </Link>
  );

  return (
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

Header.propTypes = {
  history: PropTypes.object.isRequired,
};
