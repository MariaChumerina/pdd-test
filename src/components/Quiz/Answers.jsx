import React, { useRef, useState } from 'react';
import classNames from 'classnames';

export default function Answers({ answers, chooseAnswer, hint }) {
  const [ id, setId ] = useState(-1);
  const [error, setError] = useState('');
  const [isHiddenHint, setVisibilityHint] = useState(true);
  const hintElRef = useRef(null);

  const handleSubmit = React.useCallback(() => {
    if (id !== -1) {
      chooseAnswer(id);
      setError('');
    }
    else setError('Пожалуйста, выберите 1 ответ');
    setId(-1);
    setVisibilityHint(true);
  }, [chooseAnswer, id]);

  const handleClickAnswer = (i) => {
    setId(i);
  }

  const handleClickHint = () => {
    setVisibilityHint(!isHiddenHint);
    hintElRef.current.scrollIntoView();
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
        onClick={handleClickAnswer.bind(null, i)}
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
          <div className="margin-top-30" >
            <button type="submit" onClick={handleSubmit}>
              Выбрать
            </button>
            <button
              className="button-hint button-hint-margin"
              type="button"
              onClick={handleClickHint}
            >
              Подсказка
            </button>
          </div>
          <div
            className={classNames({
              'hint-hide': isHiddenHint,
              'margin-top-15': true,
              'hint-block': true,
              })}
             ref={hintElRef}
          >
              {hint}
          </div>
        </div>
      </ul>
  );
}