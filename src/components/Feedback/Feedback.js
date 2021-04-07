import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';

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
  };

  onLeaveFeedback = voteName => {
    if (voteName === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }
    if (voteName === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
    if (voteName === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }
  };
  countTotalFeedback = () => {
    let { bad, good, neutral } = this.state;
    const total = bad + good + neutral;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = Math.round((good / total) * 100);
    return positiveFeedback;
  };
  render() {
    const { bad, good, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please Leave Feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              bad={bad}
              good={good}
              neutral={neutral}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="No feedback was given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
