import React from 'react';
import roadImg from './media/road.svg'
import './Main.css';

export default function Main() {
  return(
    <div className="container margin-top-50">
      <h2>
        Проверь свои знания прямо сейчас!
      </h2>
      <p>
        Тест содержит 20 вопросов. Тест считается пройденным, если допущено не более 2 ошибок.
      </p>
      <button type="submit">
        Поехали!
      </button>
      <div className="margin-top-30">
        <img src={roadImg} alt="дорога"/>
      </div>
    </div>
  );
}