import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import roadImg from './media/road.svg'

export default function Main() {
  const [ isSubmitted, setSubmit ] = useState(false);
  const handleClick = () => {
    setSubmit(true);
  }

  return (
    isSubmitted
      ? <Redirect to="/test" /> : (
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
      )
  );
}