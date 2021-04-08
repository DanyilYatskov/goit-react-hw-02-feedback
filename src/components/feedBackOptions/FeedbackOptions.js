import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.scss';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback('Good')}
      >
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback('Neutral')}
      >
        Neutral
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback('Bad')}
      >
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
