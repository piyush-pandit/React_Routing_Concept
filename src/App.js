import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Mounting from "./Mounting";
import Unmounting from "./Unmounting";
import Updating from "./Updating";
import HeadSection from "./HeadSection";
import Error from "./Error";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }
  handleError = (val) => {
    this.setState({ error: val });
  };
  render() {
    return (
      <div>
        {!this.state.error && <HeadSection />}
        <Switch>
          <Route exact path="/" component={Mounting} />
          <Route exact path="/updating_phase" component={Updating} />
          <Route exact path="/unmounting_phase" component={Unmounting} />
          <Route
            render={(props) => (
              <Error {...props} handleError={this.handleError} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
