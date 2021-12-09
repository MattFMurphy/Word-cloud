import React, { useEffect } from "react";

import { getSentiment } from "../../Utils/Sentiment";
import { randomRotation } from "../../Utils/randomRotation";
import { getPositioning } from "../../Utils/getPositioning";
import "./WordCloudRandom.scss";
import { Word } from "../Word/Word";

/*
 * Creates a more random word cloud - didn't work very well
 */
const WordCloud = function ({ topics, setTopic }) {
  const getWords = (topics) => {
    const positions = getPositioning(topics);
    return topics.map((topic, index) => {
      const { label, sentimentScore, volumeRank } = topic;
      const sentiment = getSentiment(sentimentScore).toLowerCase();
      const styleObj = {
        transform: `rotate(${randomRotation(-90, 90)}deg)`,
        left: `${positions[index][0]}%`,
        top: `${positions[index][1]}%`,
      };
      return (
        <Word
          styleObj={styleObj}
          volumeRank={volumeRank}
          sentiment={sentiment}
          label={label}
          setTopic={setTopic}
          topic={topic}
        />
      );
    });
  };
  return <section className="word-cloud-main">{getWords(topics)}</section>;
};

export default WordCloud;
