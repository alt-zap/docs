import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import db, { documentExists, createDocument } from '../../services/firebase';
import ThankYouMessage from './ThankYouMessage';
import FeedbackForm from './FeedbackForm';
import './Feedback.css';

function Feedback({ pageId, title }) {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmission = (feedbackData) => {
    sendFeedbackData(feedbackData);
    setFeedbackSubmitted(true);
  };

  const sendFeedbackData = async (feedbackData) => {
    try {
      const pageDocumentReference = db.collection('feedback').doc(pageId);
      const alreadyExists = await documentExists(pageDocumentReference);

      if (!alreadyExists) {
        await createDocument(pageDocumentReference, { title });
      }

      pageDocumentReference.collection('reviews').add({
        ...feedbackData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        pending: true
      });

      const incrementFieldValueBy = firebase.firestore.FieldValue.increment;

      pageDocumentReference.update(
        {
          [`${feedbackData.userReview}Reviews`]: incrementFieldValueBy(1),
          ['pendingReviews']: incrementFieldValueBy(1)
        }
      );
    } catch (error) {
      console.error(error);
    }
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
