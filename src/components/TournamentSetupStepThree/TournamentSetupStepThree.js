import React, { Component } from "react";
import "./tournament-setup-step-three.scss";
import DisplayOneVsOne from "../DisplayTeamsOneVsOne/DisplayTeamsOneVsOne";
import DisplayTwoVsTwo from "../DisplayTeamsTwoVsTwo/DisplayTeamsTwoVsTwo";
class TournamentSetupStepThree extends Component {
  state = {
    errorClass: "hide",
    errorMessage: ""
  };

  renderDisplayTeams = () => {
    if (this.props.isOneVsOne) {
      return <DisplayOneVsOne teams={this.props.teams} />;
    } else if (this.props.isTwoVsTwo) {
      return <DisplayTwoVsTwo teams={this.props.teams} />;
    }
    return null;
  };

  render() {
    const displayTeams = this.renderDisplayTeams();

    return (
      <div className="tournament-setup-step-three">
        {displayTeams}
        <div className="tournament-setup-step-three__btn">
          <button className="btn btn-primary">
            View table and match schedule
          </button>
        </div>
      </div>
    );
  }
}

export default TournamentSetupStepThree;
