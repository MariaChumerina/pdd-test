import React from 'react';
import FormInputName from '../FormInputName/FormInputName.jsx';
import { sessionSaver } from '../../SessionSaver.js';

export default class Test extends React.Component {
  state = {
    isSubmitted: false,
  }

  handleSubmit = (value) => {
    const { isSubmitted } = this.state;
    sessionSaver.setUserName(value);
    this.setState({ isSubmitted: !isSubmitted });
  }

  render() {
    const { isSubmitted } = this.state;
    return (
      isSubmitted
        ? (
          <div className="container margin-top-50">
            test
          </div>
          ) : <FormInputName onSubmit={this.handleSubmit}/>
    );
  }
}