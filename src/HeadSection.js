import React from "react";
import { Link } from "react-router-dom";

export default function HeadSection(props) {
  return (
    <div className="heado">
      <h1>COMPONENT LIFE CYCLE</h1>
      <div className="linking">
        <Link to="/">Mounting</Link> &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/updating_phase">Updating</Link> &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/unmounting_phase">Unmounting</Link>
      </div>
    </div>
  );
}
