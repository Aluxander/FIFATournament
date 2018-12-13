import React, { Component } from "react";
import ParticipentList from "../ParticipentList/ParticipentList";
import TeamsList from "../TeamsList/TeamsList";
import "./tournament-setup-step-two.scss";

class TournamentSetupStepTwo extends Component {
  render() {
    return (
      <div className="tournament-setup-step-two">
        <ParticipentList
          onAddParticipent={this.props.onAddParticipent}
          participents={this.props.participents}
        />
        <TeamsList onAddTeam={this.props.onAddTeam} teams={this.props.teams} />
      </div>
    );
  }
}

export default TournamentSetupStepTwo;
