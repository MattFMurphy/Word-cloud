import React from "react";

/**
 * Helper Component
 * @param {*} label
 * @param {*} value
 * @param {*} bonus helper class
 * @returns
 */
const PrintTopicInfo = function ({ label, value, bonusClass = "" }) {
  return (
    <p
      key={label}
      className={`topic-section__info topic-section__info--${label} ${bonusClass}`}
    >
      <strong>
        {label}: {"  "}
      </strong>
      <span>{value}</span>
    </p>
  );
};
export { PrintTopicInfo };
