import React, { useState } from 'react';
import classNames from 'classnames';

export default function Answers({ answers, chooseAnswer }) {
  const [ id, setId ] = useState(-1);
  const [error, setError] = useState('');
  const handleSubmit = React.useCallback(() => {
    if (id !== -1) {
      chooseAnswer(id);
      setError('');
    }
    else setError('Пожалуйста, выберите 1 ответ');
    setId(-1);
  }, [chooseAnswer, id]);

  const handleClick = (i) => {
    setId(i);
  }

  const renderAnswers = () => answers.map((answer, i) => {
    const styles = classNames({
      'list-group-item': true,
      'item-selected': id === i,
      'item-hover': true,
    });

    return (
      <li className={styles}
        key={answer}
        id={i}
        onClick={handleClick.bind(null, i)}
      >
        <p id={i}>
          {answer}
        </p>
      </li>
    );
  });

  return(
      <ul className="list-group">
        {renderAnswers()}
        <div className="answers-button-block">
          {error ? (
              <div className="margin-top-15 error-text">
                {error}
              </div>
          ) : ''}
          <button className="margin-top-30" type="submit" onClick={handleSubmit}>
            Выбрать
          </button>
        </div>
      </ul>
  );
}