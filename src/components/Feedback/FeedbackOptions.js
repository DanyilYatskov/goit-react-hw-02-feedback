import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="FeedbackOptions">
      <h2>Please Leave Feedback</h2>
      <button type="button" onClick={() => onLeaveFeedback('Good')}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback('Neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback('Bad')}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
