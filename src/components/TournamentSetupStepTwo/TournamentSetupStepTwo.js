import React, { Component } from "react";
import ParticipentList from "../ParticipentList/ParticipentList";
import TeamsList from "../TeamsList/TeamsList";
import "./tournament-setup-step-two.scss";
const shuffle = require("shuffle-array");
class TournamentSetupStepTwo extends Component {
  randomizeTeams = () => {
    let participents = this.props.participents;
    let teams = this.props.teams;
    let shuffledParticipents = shuffle(participents);
    let shuffledTeams = shuffle(teams);
    let generatedTeams = [];

    for (var i = 0; i < participents.length; i++) {
      generatedTeams = [
        ...generatedTeams,
        {
          participents: [shuffledParticipents[i].name],
          team: shuffledTeams[i].name
        }
      ];
    }
    this.props.onRandomTeams(generatedTeams);
  };
  render() {
    return (
      <div className="tournament-setup-step-two">
        <div className="tournament-list-wrapper">
          <ParticipentList
            onAddParticipent={this.props.onAddParticipent}
            onDeleteParticipent={this.props.onDeleteParticipent}
            participents={this.props.participents}
          />
          <TeamsList
            onAddTeam={this.props.onAddTeam}
            onDeleteTeam={this.props.onDeleteTeam}
            teams={this.props.teams}
          />
        </div>
        <button onClick={this.randomizeTeams} className="btn btn-primary">
          Generate teams
        </button>
      </div>
    );
  }
}

export default TournamentSetupStepTwo;
