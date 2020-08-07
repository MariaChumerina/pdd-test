import React from 'react';
import PropTypes from 'prop-types';
import roadImg from './media/road.svg'

export default function Main({ history }) {
  const handleClick = () => {
    history.push('/test');
  }

  return (
    <div className="container margin-top-50">
      <h2>
        Проверь свои знания прямо сейчас!
      </h2>
      <p>
        Тест содержит 20 вопросов. Тест считается пройденным, если допущено не более 2 ошибок.
      </p>
      <button className="button-green" type="button" onClick={handleClick}>
        Поехали!
      </button>
      <div className="margin-top-30">
        <img src={roadImg} alt="дорога"/>
      </div>
    </div>
  );
}

Main.propTypes = {
  history: PropTypes.object.isRequired,
}