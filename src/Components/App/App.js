import React, { useEffect, useState } from "react";

import { getTopics } from "../../Api/Api";

import NavColumn from "../NavColumn/NavColumn";
import Spinner from "../Spinner/Spinner";
import WordCloud from "../WordCloud/WordCloud";

import "./App.scss";

function App() {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState({});
  const [loading, setLoading] = useState(true);
  const [globalLoading, setglobalLoading] = useState(true);

  const categorizeTopics = (topics) => {
    //TODO
  };

  useEffect(() => {
    getTopics("./topics.json")
      .then((response) => {
        const categorizedTopics = categorizeTopics(response.topics);
        setTopics(response.topics);
        setTopic(response.topics[0]);
        setLoading(false);
        setglobalLoading(false);
      })
      .catch((error) => {
        console.error("getTopics error:");
        console.error(error);
        let errorDiv = document.getElementById("error");
        errorDiv.setAttribute("style", "display:block;");
        errorDiv.innerHTML = `<p>Something went wrong.<br>${error}</p>`;
      });
  }, []);

  if (globalLoading) {
    return (
      <main>
        <Spinner />
      </main>
    );
  }
  return (
    <main className="brandwatch-word-cloud container-fluid">
      <div className="row">
        <section className="col-12 col-md-8">
          <WordCloud topics={topics} />
        </section>
        <section className="col-12 col-md-4">
          <NavColumn topic={topic} loading={loading} />
        </section>
      </div>
    </main>
  );
}

export default App;
