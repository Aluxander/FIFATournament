import React, { Component } from "react";
import "./display-teams-two-vs-two.scss";

class DisplayTeamsTwoVsTwo extends Component {
  render() {
    const teams = this.props.teams;
    return (
      <div className="display-teams-two-vs-two">
        {teams.map(team => {
          return (
            <div
              key={team.id}
              className="display-teams-two-vs-two__team-container"
            >
              <div className="display-teams-two-vs-two__team">
                <div className="team__image">
                  <img src="images/badge.png" />
                </div>
                {team.team}
              </div>
              <div className="display-teams-two-vs-two__participants">
                <span>
                  <img src="images/player.png" />
                  {team.participants[0]}
                </span>
                <span>{team.participants[1]}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayTeamsTwoVsTwo;
