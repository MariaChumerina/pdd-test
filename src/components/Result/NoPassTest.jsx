import { sessionSaver } from '../../SessionSaver.js';
import React, { useState } from 'react';

export default function NoPassTest({ falseAnswers, tickets }) {
  const [isVisibleErrors, setVisibilityErrors ] = useState(false);

  const handleClick = () => {
    setVisibilityErrors(!isVisibleErrors);
  }

  const renderFalseAnswers = () => {
    return falseAnswers.map((answer) => {
      const ticket = tickets[answer.ticketNumber];
      const getImage = () => {
        const url = require(`../../TestTrafficLawsData/${ticket.image}`);
        return !ticket.image.includes('no_image.jpg')
            ? <img className="margin-top-15" src={url} alt="изображение ситуации" /> : '';
      }

      return (
          <div className="result-answers-block margin-top-30">
            {getImage()}
            <h3>
              {ticket.title}
            </h3>
            <p>
              Вы ответили:
              <div className="wrong-answer">
                {answer.answer}
              </div>
            </p>
            <p>
              Правильный ответ:
              <div className="right-answer">
                {answer.correct}
              </div>
            </p>
          </div>
      );
    })
  }

  return (
      <>
        <p>
          <b>{sessionSaver.getUserName()}</b>, к сожалению, вы не прошли тест.
        </p>
        <p>
          Количество ошибок: {falseAnswers.length}
        </p>
        <button className="button-result-error button-green" onClick={handleClick}>
          Показать ошибки
        </button>
        {isVisibleErrors ? (
          <div className="result-errors-block margin-top-30">
            {renderFalseAnswers()}
          </div>
        ) : ''}
      </>
  );
}