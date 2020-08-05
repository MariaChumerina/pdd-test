import React, { useState } from 'react';

export default function Answers({ answers, chooseAnswer }) {
  const [ id, setId ] = useState(0);
  const handleSubmit = React.useCallback(() => chooseAnswer(id), [chooseAnswer, id]);

  const handleClick = (e) => {
    setId(e.target.getAttribute('id'));
  }

  const renderAnswers = () => answers.map((answer, i) => {
    return (
      <li className="list-group-item" key={answer} id={i} onClick={handleClick}>
        <p id={i}>
          {answer}
        </p>
      </li>
    );
  });

  return(
      <div>
        {renderAnswers()}
        <button className="margin-top-30" type="submit" onClick={handleSubmit}>
          Выбрать
        </button>
      </div>
  );
}