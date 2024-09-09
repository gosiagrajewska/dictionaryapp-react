import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        🔊 Listen
      </a>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
