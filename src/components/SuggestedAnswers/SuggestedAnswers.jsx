import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SuggestedAnswers.css';

export default function SuggestedAnswers({ answers, selectAnswer, hint }) {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [noSelectedError, setNoSelectedError] = useState('');
  const [isHiddenHint, setHiddenHint] = useState(true);
  const hintElRef = useRef(null);

  const handleSubmitAnswer = React.useCallback(() => {
    // validation: submit only if answer selected
    if (selectedAnswerId !== null) {
      selectAnswer(selectedAnswerId);
      setNoSelectedError('');
    } else setNoSelectedError('Пожалуйста, выберите 1 ответ');

    // cancel selected answer for next question
    setSelectedAnswerId(null);
    // made invisible hint for next question
    setHiddenHint(true);
  }, [selectAnswer, selectedAnswerId]);

  const handleClickAnswer = (i) => {
    // double click cancels selection
    if (selectedAnswerId === i) setSelectedAnswerId(null);
    else setSelectedAnswerId(i);
  };

  const handleClickHint = () => {
    setHiddenHint(!isHiddenHint);
    hintElRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const renderListAnswers = () => answers.map((answer, i) => {
    const styles = classNames({
      'list-group-item': true,
      'item-selected': selectedAnswerId === i,
      'item-hover': selectedAnswerId !== i,
    });

    return (
      <li
        className={styles}
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

  const renderError = () => (noSelectedError
    ? (
      <div className="margin-top-15 error-text">
        {noSelectedError}
      </div>
    ) : ''
  );

  return (
    <ul className="list-group">
      {renderListAnswers()}
      <div className="answers-button-block">
        <div className="margin-top-30">
          {/* if don't select and click to button choose answer */}
          {renderError()}
          <button type="button" onClick={handleSubmitAnswer}>
            Выбрать
          </button>
          <button
            className="button-green button-hint-margin"
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

SuggestedAnswers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectAnswer: PropTypes.func.isRequired,
  hint: PropTypes.string.isRequired,
};
