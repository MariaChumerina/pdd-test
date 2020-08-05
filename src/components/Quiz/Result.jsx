import React, { useCallback } from 'react';
import { sessionSaver } from '../../SessionSaver.js';

export default function Result({ falseAnswers, startTest }) {
  const handleClick = useCallback(() => startTest(), [startTest]);

  return (
    <div className="container margin-top-50">
      {falseAnswers.length > 2 ? (
        <>
          <p>
            <b>{sessionSaver.getUserName()}</b>, к сожалению, вы не прошли тест.
            Количество ошибок: {falseAnswers.length}
          </p>
          <p>
            Попробуйте улучшить результат!
          </p>
        </>
      ) : (
         <>
           <p>
             <b>{sessionSaver.getUserName()}</b>, поздравляем, вы прошли тест!
           </p>
           <p>
             Чтобы укрепить свои знания, потренируйтесь еще.
           </p>
         </>
      )}
      <button type="button" onClick={handleClick}>
        Попробовать снова
      </button>
    </div>
  );
}