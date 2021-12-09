import React from "react";
import Spinner from "../Spinner/Spinner";
import "./NavColumn.scss";

import { getSentiment } from "../../Utils/Sentiment";
import { percentage } from "../../Utils/Percentage";
import TopicSection from "./TopicSection";
import { PrintTopicInfo } from "./PrintTopicInfo";

const NavColumn = function ({ activeTopic = null }) {
  const emptyObject = (obj) => {
    return JSON.stringify(obj) === JSON.stringify({});
  };

  /**
   * Main generator function for the component
   * @param {*} topic - The topic Object
   * @returns navJSX
   */
  const populateMeta = (topic) => {
    const { id, pageType, label, sentiment, sentimentScore, volume } = topic;

    const getTopicSources = (pageType) => {
      let jsx = [];
      for (const key in pageType) {
        jsx = [
          ...jsx,
          <PrintTopicInfo
            key={`Sentiment source-${key}`}
            label={key}
            value={percentage(pageType[key], pageType)}
            bonusClass="col-12 col-md-6"
          />,
        ];
      }
      return jsx;
    };

    return (
      <aside className="word-cloud-navColumn__topic">
        <TopicSection key="Information on topic">
          <h5 className="topic-section__name">
            <strong>Information on topic:</strong>
            {"  "}"{label}"
          </h5>
          <PrintTopicInfo
            key="Sentiment (positive / negative)"
            label="Sentiment (positive / negative)"
            value={getSentiment(sentimentScore)}
            bonusClass={`topic-section__info--${getSentiment(
              sentimentScore
            )}--score`}
          />
          <PrintTopicInfo
            key="Sentiment Score"
            label="Sentiment Score"
            value={sentimentScore}
          />
          <PrintTopicInfo key="Volume" label="Volume" value={volume} />
        </TopicSection>
        <TopicSection key="Sentiment drilldown">
          <h5 className="topic-section__name">
            <strong>Sentiment drilldown</strong>
          </h5>
          <PrintTopicInfo
            key="Positive sentiments"
            label="Positive sentiments"
            value={sentiment.positive ? sentiment.positive : 0}
            bonusClass="topic-section__info--POSITIVE--score"
          />
          <PrintTopicInfo
            key="Neutral sentiments"
            label="Neutral sentiments"
            value={sentiment.neutral ? sentiment.neutral : 0}
            bonusClass="topic-section__info--NEUTRAL--score"
          />
          <PrintTopicInfo
            key="Negative sentiments"
            label="Negative sentiments"
            value={sentiment.negative ? sentiment.negative : 0}
            bonusClass="topic-section__info--NEGATIVE--score"
          />
        </TopicSection>
        <TopicSection key="Sentiment Source">
          <h5 className="topic-section__name">
            <strong>Sentiment Source:</strong>
          </h5>
          <div className="topic-section__sources row">
            {" "}
            {getTopicSources(pageType)}
          </div>
        </TopicSection>
      </aside>
    );
  };
  console.log(activeTopic);

  return (
    <nav
      className={`word-cloud-navColumn bg-light border row ${
        emptyObject ? "justify-content-center" : ""
      }`}
      role="navcolumn"
    >
      {emptyObject(activeTopic) ? (
        <h2>
          <strong>Select a topic to start</strong>
        </h2>
      ) : (
        <>
          <div className="word-cloud-navColumn__main-title">
            <h2>
              <strong>Topic Drilldown</strong>
            </h2>
          </div>
          {populateMeta(activeTopic)}
        </>
      )}
    </nav>
  );
};

export default NavColumn;
