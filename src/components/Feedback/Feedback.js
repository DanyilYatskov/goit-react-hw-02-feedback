import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: 0,
  };
  handleNewVote = voteName => {
    this.setState(prevState => ({
      voteName: prevState.voteName + 1,
    }));
  };
  render() {
    return;
  }
}

export default Feedback;
