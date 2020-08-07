import React, { useState } from 'react';
import PropTypes from 'prop-types';
import testImg from './media/pdd-test-img.svg';
import './FormInputName.css';

export default function FormInputName({ onSubmit }) {
  const [value, setValue] = useState('');
  const handleSubmit = React.useCallback(() => onSubmit(value), [onSubmit, value]);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <form className="container margin-top-50" onSubmit={handleSubmit}>
      <div className="margin-top-30">
        <img className="form-image" src={testImg} alt="знак STOP" />
      </div>
      <input
        type="text"
        className="form-field margin-top-30"
        pattern="[A-Za-zА-Яа-яЁё0-9]{1,}"
        placeholder="Введите имя"
        value={value}
        onChange={handleChange}
        required
      />
      <div className="margin-top-15">
        <button type="submit">
          Подтвердить
        </button>
      </div>
    </form>
  );
}

FormInputName.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
