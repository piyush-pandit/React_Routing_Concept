import React from "react";

const Unmounting = () => {
  return (
    <div className="uno">
      <h2 className="unmou">UNMOUNTING PHASE</h2>
      <div>
        <h3>
          <strong>What is Unmounting?</strong>
        </h3>
        <p>
          The main job of React is to figure out how to modify the DOM to match
          what the components want to be rendered on the screen and hence
          Unmounting removes hem from the DOM.
        </p>
        <h3>
          <strong>Methods of Unmounting & its uses </strong>
        </h3>
        <ul>
          <li>
            ComponentWillUnmount is the only method that executes in unmount
            phase.
          </li>
          <br />
          <li>
            Component enters into this phase when there is no matching in
            element tree for this component.
          </li>
          <br />
          <li>
            Just before the component gets removed from actual DOM, this method
            gets called.
          </li>
          <br />
          <li>
            Along with removal of this component from DOM tree, all children of
            this component also gets removed automatically.
          </li>
          <br />
          <li>
            Once component is removed from the DOM, it gets available for the
            garbage collection in React.
          </li>
          <br />
          <li>
            Cleanup activities can be done in this method. E.g. clear
            localstorage variables used in app, clear session, clean up charts,
            cleanup timers, cancel pending api requests etc.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Unmounting;
