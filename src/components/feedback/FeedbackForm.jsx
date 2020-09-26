import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import './FeedbackForm.css';

function FeedbackForm({ onSubmit }) {
  const [userReview, setUserReview] = useState(null);

  const handleUserReviewChange = (e) => {
    const newUserReview = e.target.value;
    setUserReview(newUserReview);
  };

  useEffect(() => {
    if (userReview != null) {
      const feedbackData = {
        userReview
      };

      onSubmit(feedbackData);
    }
  }, [userReview]);

  return (
    <form className="feedbackForm" autoComplete="off">
      <div className="feedbackForm__fields">
        <div className="feedbackForm__ratingField">
          <p>Esta página foi útil?</p>

          <div className="feedbackForm__radioGroup">
            <input type="radio" id="positive" name="user-rating"
              value="positive" onChange={handleUserReviewChange}
            />
            <label htmlFor="positive"
              className={
                `feedbackForm__userReviewLabel positive
                ${userReview == 'positive' && 'checked'}`
              }
            >
              <img src={`${useBaseUrl('img/thumbs-up.svg')}`} alt="Sim" />
              Sim
            </label>

            <input type="radio" name="user-rating" id="negative"
              value="negative" onChange={handleUserReviewChange}
            />
            <label htmlFor="negative"
              className={
                `feedbackForm__userReviewLabel negative
                ${userReview == 'negative' && 'checked'}`
              }
            >
              <img src={`${useBaseUrl('img/thumbs-down.svg')}`} alt="Não" />
              Não
            </label>
          </div>
        </div>

        <p className="feedbackForm__description">
          A sua opinião nos ajudará a melhorar o nosso conteúdo
        </p>
      </div>
    </form>
  );
}

export default FeedbackForm;
