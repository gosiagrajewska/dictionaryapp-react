import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms[0]) {
    return (
      <div className="synonyms">
        <span className="synonym-words">
          <strong>Synonyms: </strong>
        </span>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
