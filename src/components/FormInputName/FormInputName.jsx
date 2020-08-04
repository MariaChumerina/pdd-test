import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import testImg from './media/pdd-test-img.svg';
import './FormInputName.css';

export default function FormInputName({onSubmit}) {
  const [ value, setValue ] = useState('');
  const handleSubmit = React.useCallback(() => onSubmit(value), [onSubmit]);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  }

  return (
    <div className="container margin-top-50">
      <div className="margin-top-30">
        <img src={testImg} alt="знак STOP" />
      </div>
      <input
        type="text"
        className="form-field margin-top-30"
        pattern="[A-Za-zА-Яа-яЁё]{1,13}"
        placeholder="Введите имя"
        value={value}
        onChange={handleChange}
        required
      />
      <div className="margin-top-15">
        <button type="submit" onClick={handleSubmit}>
          Подтвердить
        </button>
      </div>
      <div className="margin-top-50">
        <Link to='/' >
          На главную
        </Link>
      </div>
    </div>
  );
}