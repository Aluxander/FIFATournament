import React, { Component } from "react";
import TournamentSetupPage from "./containers/TournamentSetupPage/TournamentSetupPage";
class App extends Component {
  render() {
    return (
      <div className="container body-content">
        <TournamentSetupPage />
      </div>
    );
  }
}

export default App;
