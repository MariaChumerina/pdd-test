import React from 'react';
import { sessionSaver } from '../../SessionSaver.js';

export default function Result({ falseAnswers }) {
  return (
    <div className="container margin-top-50">
      {falseAnswers.length > 2 ? (
          <p>
            {sessionSaver.getUserName()}, к сожалению, вы не прошли тест!
            Количество ошибок: {falseAnswers.length}
          </p>
      ) : (
          <p>
            {sessionSaver.getUserName()}, поздравляем, вы прошли тест!
          </p>
      )}
    </div>
  );
}