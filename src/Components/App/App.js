import React, { useEffect, useState } from "react";
import { getTopics } from "../../Api/Api";
import Spinner from "../Spinner/Spinner";

function App() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics("./topics.json")
      .then((response) => {
        //console.log("getTopics: ", response);
        setTopics(response);
      })
      .catch((error) => {
        console.error("getTopics error:");
        console.error(error);
        let errorDiv = document.getElementById("error");
        errorDiv.setAttribute("style", "display:block;");
        errorDiv.innerHTML = `<p>Something went wrong.<br>${error}</p>`;
      });
  }, []);

  if (loading) {
    return (
      <main>
        <Spinner />
      </main>
    );
  }
  return <main></main>;
}

export default App;
