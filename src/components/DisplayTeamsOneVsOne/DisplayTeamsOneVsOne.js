import React, { Component } from "react";
import "./display-teams-one-vs-one.scss";
class DisplayTeamsOneVsOne extends Component {
  render() {
    const teams = this.props.teams;
    return (
      <div className="display-teams-one-vs-one">
        {teams.map(team => {
          return (
            <div
              key={team.id}
              className="display-teams-one-vs-one__team-container"
            >
              <div className="display-teams-one-vs-one__team">
                <div className="team__image">
                  <img src="images/badge.png" />
                </div>
                {team.team}
              </div>
              <div className="display-teams-one-vs-one__participant">
                {team.participants}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayTeamsOneVsOne;
