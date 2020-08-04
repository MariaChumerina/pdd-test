import React from 'react';
import { Link } from 'react-router-dom';
import testImg from './media/pdd-test-img.svg';
import './Test.css';
import { sessionSaver } from '../../SessionSaver.js';

export default class Test extends React.Component {
  state = {
    value: '',
    name: '',
    isSubmitted: false,
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  }

  handleSubmit = () => {
    const { value, isSubmitted } = this.state;
    sessionSaver.setUserName(value);
    this.setState({ isSubmitted: !isSubmitted });
  }

  render() {
    const { value } = this.state;

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
              onChange={this.handleChange}
              required
          />
          <div className="margin-top-15">
            <button type="submit" onClick={this.handleSubmit}>
              Начать тест
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
}