import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './Result.css';
import NoPassTest from './NoPassTest.jsx';
import PassTest from './PassTest.jsx';
import getImageSrc from '../../utils/getImage.js';

export default function Result({ tickets, wrongAnswers, startTest }) {
  const handleClickStart = useCallback(() => startTest(), [startTest]);
  const [isVisibleErrors, setVisibilityErrors] = useState(false);

  const handleClick = () => {
    setVisibilityErrors(!isVisibleErrors);
  };

  const renderWrongAnswers = () => wrongAnswers.map((answer) => {
    const ticket = tickets[answer.ticketNumber];

    const getImage = () => (!ticket.image.includes('no_image.jpg')
      ? <img className="margin-top-15" src={getImageSrc(ticket.image)} alt="изображение ситуации" /> : '');

    return (
      <div className="result-answers-block margin-top-30" key={answer.ticketNumber}>
        {getImage()}
        <h3>
          {ticket.title}
        </h3>
        <div className="margin-top-15">
          Ваш ответ:
          <p className="wrong-answer">
            {answer.answer}
          </p>
        </div>
        <div className="margin-top-15">
          Правильный ответ:
          <p className="right-answer">
            {answer.correct}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="container result-block margin-top-50">
      {wrongAnswers.length > 2
        ? <NoPassTest wrongAnswers={wrongAnswers} tickets={tickets} />
        : <PassTest wrongAnswers={wrongAnswers} />}
      <button className="result-button" type="button" onClick={handleClickStart}>
        Попробовать снова
      </button>
      {wrongAnswers.length ? (
        <button type="button" className="button-result-error button-green" onClick={handleClick}>
          Показать ошибки
        </button>
      ) : ''}
      {isVisibleErrors ? (
        <div className="result-errors-block margin-top-30">
          {renderWrongAnswers()}
        </div>
      ) : ''}
    </div>
  );
}

Result.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  wrongAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
  startTest: PropTypes.func.isRequired,
};
