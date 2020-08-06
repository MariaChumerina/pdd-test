import passTest from './media/pass.svg';
import { sessionSaver } from '../../SessionSaver.js';
import React from 'react';

export default function PassTest({ falseAnswers }) {
  const countOfFalseAnswers = falseAnswers.length;

  return (
      <>
        <img src={passTest} alt="тест пройден"/>
        <p>
          <b>{sessionSaver.getUserName()}</b>, поздравляем, вы прошли тест!
        </p>
        <p>
          {countOfFalseAnswers
              ? `Количество ошибок: ${countOfFalseAnswers}.` : 'Вы не совершили ни одной ошибки!'}
        </p>
        <p>
          Закрепите свой результат и пройдите тест еще раз.
        </p>
      </>
  );
}