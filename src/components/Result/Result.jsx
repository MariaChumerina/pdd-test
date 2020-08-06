import React, { useCallback } from 'react';
import './Result.css';
import NoPassTest from './NoPassTest.jsx';
import PassTest from './PassTest.jsx';

export default function Result({ tickets, falseAnswers, startTest }) {
  const handleClick = useCallback(() => startTest(), [startTest]);

  return (
    <div className="container result-block margin-top-50">
      {falseAnswers.length > 2
          ? <NoPassTest falseAnswers={falseAnswers} tickets={tickets} />
            : <PassTest falseAnswers={falseAnswers} />}
      <button className="result-button" type="button" onClick={handleClick}>
        Попробовать снова
      </button>
    </div>
  );
}