import React from "react";

/* Saves a tiny bit of writing */
const TopicSection = function ({ name, children }) {
  return <div className="topic-section">{children}</div>;
};

export default TopicSection;
