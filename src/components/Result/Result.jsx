import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './Result.css';
import NoPassTest from './NoPassTest.jsx';
import PassTest from './PassTest.jsx';
import WrongAnswers from './WrongAnswers.jsx';

export default function Result({ tickets, wrongAnswers, startTest }) {
  const handleClickStart = useCallback(() => startTest(), [startTest]);
  const [isVisibleMistakes, setVisibilityMistakes] = useState(false);

  const handleClickMistakes = () => {
    setVisibilityMistakes(!isVisibleMistakes);
  };

  const isPassedTest = (allowedCountMistakes) => wrongAnswers.length <= allowedCountMistakes;

  return (
    <div className="container result-block margin-top-50">
      {isPassedTest(2)
        ? <PassTest wrongAnswers={wrongAnswers} />
        : <NoPassTest wrongAnswers={wrongAnswers} tickets={tickets} />}
      <button className="result-button" type="button" onClick={handleClickStart}>
        Попробовать снова
      </button>
      {wrongAnswers.length ? (
        <button type="button" className="button-result-error button-green" onClick={handleClickMistakes}>
          Показать ошибки
        </button>
      ) : ''}

      { /*when click to show mistakes, render block with question, wrong answer and right answer*/ }
      {isVisibleMistakes ? <WrongAnswers wrongAnswers={wrongAnswers} tickets={tickets} /> : ''}
    </div>
  );
}

Result.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  wrongAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
  startTest: PropTypes.func.isRequired,
};
