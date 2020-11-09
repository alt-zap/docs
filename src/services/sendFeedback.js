import firebase from 'firebase/app';
import 'firebase/firestore';

import db, { documentExists, createDocument } from './firebase';

const sendFeedback = async (pageInfo, feedbackData) => {
  const { id: pageId, title } = pageInfo;

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
};

export default sendFeedback;
