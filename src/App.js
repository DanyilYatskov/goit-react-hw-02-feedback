import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Statistics from './components/Statistics/';
import FeedbackOptions from './components/feedBackOptions/';
import Notification from './components/Notification/';
import Section from './components/Section/';

class App extends Component {
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
    const normalizedName = voteName.toLowerCase();
    this.setState(prevState => ({
      [normalizedName]: prevState[normalizedName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    const total = bad + good + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
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

export default App;
