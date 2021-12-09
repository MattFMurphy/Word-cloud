import React, { useEffect } from "react";

import { getSentiment } from "../../Utils/Sentiment";
import "./WordCloud.scss";
import { Word } from "../Word/Word";

const WordCloud = function ({ topics, setActiveTopic, activeTopic }) {
  return (
    <section className="word-cloud-main">
      <ul>
        {topics.map((topic) => {
          const { label, volumeRank, sentimentScore, id } = topic;
          const isActive = id === activeTopic.id;
          /* Create topics.length number of Words */
          return (
            <Word
              key={`word-${id}`}
              volumeRank={volumeRank}
              sentiment={getSentiment(sentimentScore).toLowerCase()}
              label={label}
              id={id}
              setActiveTopic={setActiveTopic}
              topic={topic}
              isActive={isActive}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default WordCloud;
