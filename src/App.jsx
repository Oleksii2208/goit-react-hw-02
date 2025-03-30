import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(window.localStorage.getItem("clicks"));
    if (savedClicks !== null) {
      return savedClicks;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    window.localStorage.setItem("clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
  };
  const resetClick = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);
  return (
    <Section>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetClick={resetClick}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          clicks={clicks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </Section>
  );
};

export default App;
