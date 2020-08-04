import React from 'react';
import FormInputName from '../FormInputName/FormInputName.jsx';
import pddData from '../../pddData/questions.json';
import { sessionSaver } from '../../SessionSaver.js';
import getTickets from '../../utils/getTickets.js';

export default class Test extends React.Component {
  state = {
    isSubmitted: false,
    tickets: [],
  }

  handleSubmit = (value) => {
    const { isSubmitted } = this.state;
    sessionSaver.setUserName(value);
    this.setState({ isSubmitted: !isSubmitted });
  }

  componentDidMount() {
    const tickets = getTickets(pddData);
    this.setState({ tickets });
  }

  render() {
    const { isSubmitted } = this.state;
    return (
      isSubmitted
        ? (
          <div className="container margin-top-50">
            sdf
          </div>
          ) : <FormInputName onSubmit={this.handleSubmit}/>
    );
  }
}