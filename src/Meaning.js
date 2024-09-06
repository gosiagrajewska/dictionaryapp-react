import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <span>🔎 </span>
              {definition.definition}
              <br />
              <div className="example">
                <Example example={definition.example} />
              </div>
            </div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
