import React, { useState, useEffect } from "react";
import Axios from "axios";

function Search() {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(
    function () {
      const search = async () => {
        const { data } = await Axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: term,
          },
        });
        setResults(data.query.search);
      };
      const timeOutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);
    },
    [term]
  );
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated element">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

export default Search;