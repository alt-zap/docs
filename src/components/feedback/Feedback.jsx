import React, { useCallback, useState } from 'react';

import { sendFeedback } from '../../services';
import ThankYouMessage from './ThankYouMessage';
import FeedbackForm from './FeedbackForm';

import './Feedback.css';

function Feedback({ pageId, title }) {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmission = useCallback((feedbackData) => {
    const pageInfo = { id: pageId, title };

    sendFeedback(pageInfo, feedbackData);
    setFeedbackSubmitted(true);
  }, [pageId, title]);

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
