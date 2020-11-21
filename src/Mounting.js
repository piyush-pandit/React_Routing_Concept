import React from "react";

const Mounting = () => {
  return (
    <div className="baap">
      <h2 className="mou">MOUNTING PHASE</h2>
      <div>
        <h3>
          <strong>What is mounting?</strong>
        </h3>
        <p>
          Mounting is the process of outputting the virtual representation of a
          component into the final UI representation (e.g. DOM or Native
          Components). In a browser that would mean outputting a React Element
          into an actual DOM element (e.g. an HTML div or li element) in the DOM
          tree.
        </p>
        <h3>
          <strong>Methods of Mounting & its uses </strong>
        </h3>
        <ul>
          <li>
            <strong className="baccha">Constructor</strong> :- used to
            initialise the states.
          </li>{" "}
          <br />
          <li>
            <strong className="baccha">getDerivedFromProps</strong> :- used to
            Update the state passed.
          </li>{" "}
          <br />
          <li>
            <strong className="baccha">render</strong> :- Whatever functionality
            of Jsx occured in the above two steps will be displayed in this
            method.
          </li>{" "}
          <br />
          <li>
            <strong className="baccha">componentDidMount</strong> :- Used to
            completely mount or run any function or here DOM or state should
            occur.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Mounting;
