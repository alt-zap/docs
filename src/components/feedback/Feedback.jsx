import React, { useState } from 'react';

import ThankYouMessage from './ThankYouMessage';
import FeedbackForm from './FeedbackForm';
import './Feedback.css';

function Feedback({ pageId }) {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmission = (feedbackData) => {
    sendFeedbackData(feedbackData);
    setFeedbackSubmitted(true);
  };

  const sendFeedbackData = (feedbackData) => {
    // Temp
    console.log('Feedback sent!');
    console.log(feedbackData);
    console.log(pageId);
    // Temp
  };

  return (
    <div className="feedback">
      {feedbackSubmitted ? (
        <ThankYouMessage />
      ) : (
        <FeedbackForm onSubmit={handleFeedbackSubmission} />
      )}
    </div>
  );
}

export default Feedback;
