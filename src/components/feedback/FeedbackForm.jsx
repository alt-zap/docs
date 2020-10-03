import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import './FeedbackForm.css';

function FeedbackForm({ onSubmit }) {
  const [userReview, setUserReview] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const [feedbackReady, setFeedbackReady] = useState(false);

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    setFeedbackReady(true);
  };

  const handleFormAnimationEnd = ({ animationName }) => {
    if (animationName == 'fade-out') {
      submitFeedback();
    }
  };

  const submitFeedback = () => {
    const feedbackData = {
      userReview,
      feedbackMessage
    };

    onSubmit(feedbackData);
  };

  return (
    <form
      className={`
        feedbackForm
        ${userReview ? 'expand' : ''}
        ${feedbackReady ? 'fadeOut' : ''}
      `}
      autoComplete="off"
      onSubmit={handleFeedbackSubmit}
      onAnimationEnd={handleFormAnimationEnd}
    >
      <div className="feedbackForm__userReviewContainer">
        <p>Esta página foi útil?</p>

        <div className="feedbackForm__radioGroup">
          <input
            type="radio"
            id="positive"
            name="user-review"
            value="positive"
            onChange={e => setUserReview(e.target.value)}
            disabled={userReview ? true : false}
          />
          <label
            htmlFor="positive"
            className={
              `feedbackForm__userReviewLabel positive
              ${userReview == 'positive' && 'checked'}
              ${!userReview && 'enabled'}`
            }
          >
            <img src={`${useBaseUrl('img/thumbs-up.svg')}`} alt="Sim" />
            Sim
          </label>

          <input
            type="radio"
            name="user-review"
            id="negative"
            value="negative"
            onChange={e => setUserReview(e.target.value)}
            disabled={userReview ? true : false}
          />
          <label
            htmlFor="negative"
            className={
              `feedbackForm__userReviewLabel negative
              ${userReview == 'negative' && 'checked'}
              ${!userReview && 'enabled'}`
            }
          >
            <img src={`${useBaseUrl('img/thumbs-down.svg')}`} alt="Não" />
            Não
          </label>
        </div>
      </div>

      {userReview ? (
        <>
          <textarea
            className="feedbackForm__feedbackMessage"
            name="feedbackMessage"
            id="feedbackMessage"
            placeholder={
              userReview == 'positive'
                ? 'Nos conte o que você achou...'
                : 'Como podemos melhorá-la?'
            }
            onChange={e => setFeedbackMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="button button--primary feedbackForm__submitFeedback"
          >
            Enviar avaliação
          </button>
        </>
      ) : (
        <p className="feedbackForm__description">
          A sua opinião nos ajudará a melhorar o nosso conteúdo
        </p>
      )}
    </form>
  );
}

export default FeedbackForm;
