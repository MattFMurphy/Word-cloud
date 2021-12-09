import React from "react";
import "./Word.scss";

const Word = function ({
  styleObj = {},
  volumeRank,
  sentiment,
  label,
  setActiveTopic,
  id,
  topic,
  isActive,
}) {
  /* Assign positive / neutral / negative sentiment and ranking to modifier classes on the word.  Update app topic state on click */
  return (
    <h3
      onClick={() => setActiveTopic(topic)}
      className={`word-cloud-main__word word-cloud-main__word--${sentiment} word-cloud-main__word--rank-${volumeRank} ${
        isActive ? "word-cloud-main__word--active" : ""
      }`}
      style={styleObj}
    >
      {label}
    </h3>
  );
};

export { Word };
