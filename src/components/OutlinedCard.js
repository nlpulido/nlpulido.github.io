import React from 'react';
import history from "../History";
import "./OutlinedCard.scss";

export default function OutlinedCard(props) {

  return (
    <div className="card-container">
      <div>
        <h1>{props.project.title}</h1>
        <p>{props.project.description}</p>
        <h3>{props.project.language}</h3>
      </div>
      <button>
        <p>LEARN MORE</p>
      </button>
    </div>
  );
}