import React, { useCallback } from 'react';
import './Result.css';
import NoPassTest from './NoPassTest.jsx';
import PassTest from './PassTest.jsx';

export default function Result({ tickets, falseAnswers, startQuiz }) {
  const handleClick = useCallback(() => startQuiz(), [startQuiz]);

  return (
    <div className="container margin-top-50">
      {falseAnswers.length > 2
          ? <NoPassTest falseAnswers={falseAnswers} tickets={tickets} />
            : <PassTest falseAnswers={falseAnswers} />}
      <button className="margin-top-15" type="button" onClick={handleClick}>
        Попробовать снова
      </button>
    </div>
  );
}