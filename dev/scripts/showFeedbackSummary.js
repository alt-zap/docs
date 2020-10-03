/*eslint-env node */
import colors from 'colors';

import db from '../../src/services/firebase';
import { toSpacedString } from '../../src/utils/toSpacedString';

const getFormattedSummary = (summary) => {
  const { pageId, positiveReviews, negativeReviews, approvalRate } = summary;
  const approvalRatePercentage = (approvalRate * 100).toFixed(1) + '%';

  let coloredApprovalRatePercentage;
  if (positiveReviews > negativeReviews) {
    coloredApprovalRatePercentage = approvalRatePercentage.green;
  } else if (positiveReviews < negativeReviews) {
    coloredApprovalRatePercentage = approvalRatePercentage.red;
  } else {
    coloredApprovalRatePercentage = approvalRatePercentage.yellow;
  }

  const formattedSummary = (
    `'${pageId.toString().cyan.bold}'\n` +
    `  - ${toSpacedString(positiveReviews).green.bold} positive reviews\n` +
    `  - ${toSpacedString(negativeReviews).red.bold} negative reviews\n` +
    `  approval rate of ${coloredApprovalRatePercentage}\n`.bold
  );

  return formattedSummary;
};

const showFeedbackSummary = () => {
  console.log('\nQuerying feedback summary for all doc pages...\n'.bold);

  db.collection('feedback')
    .onSnapshot(snapshot => {
      snapshot.docs.sort().forEach(pageDocument => {
        const { positiveReviews = 0, negativeReviews = 0 } = pageDocument.data();
        const approvalRate = (
          positiveReviews / (positiveReviews + negativeReviews)
        );

        const summary = getFormattedSummary({
          pageId: pageDocument.id,
          positiveReviews,
          negativeReviews,
          approvalRate
        });

        console.log(summary);
      });

      process.exit(0);
    });
};

showFeedbackSummary();
