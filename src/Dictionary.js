import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h5>What word are you looking for?</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            <em>suggested words: sunset, table, flower...</em>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
