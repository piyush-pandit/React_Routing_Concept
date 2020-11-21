import React from "react";

const Updating = () => {
  return (
    <div className="updo">
      <h2 className="dating">UPDATING PHASE</h2>
      <div>
        <h3>
          <strong>What is Updating ?</strong>
        </h3>
        <p>
          The update lifecycle can be triggered by two events − First by
          Updating of props by parent component and second by making Changes in
          local state.
        </p>
        <h3>
          <strong>Methods of Updating & its uses </strong>
        </h3>
        <ul>
          <li>
            <strong className="bada">
              componentWillReceiveProps(nextProps)
            </strong>{" "}
            :- This is the first method which gets called on prop change. It
            contains one argument nextProps means the newly changed props. Here,
            we can synchronize local state with props if required If state is
            not needed to synchronize with props then probably no need to
            implement this method. Causing side effects should be avoided here.
            Because if side effects used here, it may results into re-render or
            performance issues.
          </li>
          <br />
          <li>
            <strong className="bada">
              shouldComponentUpdate(nextProps, nextState)
            </strong>{" "}
            :- This method returns a Boolean value true or false. Based on the
            return value React executes the render method which updates the
            actual DOM. We can add custom logic if requires in this method like
            comparing some variables to decide the process of updating. Side
            effects should be avoided.
          </li>
          <br />
          <li>
            <strong className="bada">
              ComponentWillUpdate(nextProps, nextState){" "}
            </strong>{" "}
            :- This method executes once shouldComponentUpdate returns true.
            This can be the better place to sync state with props as it will be
            going to render for sure. Side effects should be avoided here too.
            Now, componentWillUpdate is deprecated. Latest method is
            getSnapshotBeforeUpdate, which can be used in rare cases. Example
            use case is identifying scroll positions of an element. This method
            executes just before actual update to DOM.
          </li>
          <br />
          <li>
            <strong className="bada">Render</strong> :- render method execution
            decides which changes needed to update on the actual DOM after
            comparison with using virtual DOM As usual, it will prepare the jsx
            code as per the update condition. It will also process the update of
            child components. We can return almost anything like a Boolean,
            null, a string, array, div, fragment etc from render method.
          </li>
          <br />
          <li>
            <strong className="bada">componentDidUpdate</strong> :- Here, we can
            do side effects. But updating state using setState should be done
            with care. It should update only conditionally to avoid the infinite
            api call loop. Because componentDidUpdate gets called on every
            update after render method call.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Updating;
