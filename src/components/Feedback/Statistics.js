import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.scss';

const Statistics = ({ bad, neutral, good, total, positiveFeedback }) => {
  return (
    <div>
      <p className={styles.stats}>Good: {good}</p>
      <p className={styles.stats}>Neutral: {neutral}</p>
      <p className={styles.stats}>Bad: {bad}</p>
      <p className={styles.total}>Total: {total}</p>
      <p className={styles.positiveFeedback}>
        Positive Feedback: {positiveFeedback}%
      </p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
