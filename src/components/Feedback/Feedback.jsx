import s from "./Feedback.module.css";

const Feedback = ({ clicks, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={s.feedbackList}>
        <li className={s.feedbackItem}>Good:{clicks.good}</li>
        <li className={s.feedbackItem}>Neutral:{clicks.neutral}</li>
        <li className={s.feedbackItem}>Bad:{clicks.bad}</li>
        <li className={s.feedbackItem}>Total:{totalFeedback}</li>
        <li className={s.feedbackItem}>Positive:{positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
