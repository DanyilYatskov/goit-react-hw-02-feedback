import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ bad, neutral, good }) => {
  const total = bad + good + neutral;
  const positiveFeedback = (good / total) * 100;
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {good}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
