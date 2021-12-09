import React, { useEffect, useState } from "react";

import { getTopics } from "../../Api/Api";
import {
  categorizeTopicsMean,
  categorizeTopicsPercentiles,
} from "../../Utils/categorizeTopics";
import { shuffle } from "../../Utils/shuffleArray";

import NavColumn from "../NavColumn/NavColumn";
import Spinner from "../Spinner/Spinner";
import WordCloud from "../WordCloud/WordCloud";

import "./App.scss";

function App() {
  const [topics, setTopics] = useState([]);
  const [activeTopic, setActiveTopic] = useState({});
  const [loading, setLoading] = useState(true);
  const [globalLoading, setglobalLoading] = useState(true);

  useEffect(() => {
    /* On load, use the api to transform json file into array */
    getTopics("./topics.json")
      .then((response) => {
        /* Once we've got the array, use the categorize topics function to add a ranking property based off of volume.
           Using Median's here because the json file is heavily skewed up*/
        const categorizedTopics = categorizeTopicsPercentiles(response.topics);
        /* Give topics a shuffle there's a nice even volume distribution */
        setTopics(shuffle(categorizedTopics));
        // setActiveTopic(categorizedTopics[0]);
        setLoading(false);
        setglobalLoading(false);
      })
      .catch((error) => {
        console.error("getTopics error:");
        console.error(error);
        /* Had a bit of a problem - display on the screen */
        let errorDiv = document.getElementById("error");
        errorDiv.setAttribute("style", "display:block;");
        errorDiv.innerHTML = `<p>Something went wrong.<br>${error}</p>`;
      });
  }, []);

  if (globalLoading) {
    //Return spinner if loading
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
          <WordCloud
            topics={topics}
            setActiveTopic={setActiveTopic}
            activeTopic={activeTopic}
          />
        </section>
        <section className="col-12 col-md-4">
          <NavColumn activeTopic={activeTopic} />
        </section>
      </div>
    </main>
  );
}

export default App;
