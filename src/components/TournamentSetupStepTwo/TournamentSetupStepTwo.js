import React, { Component } from "react";
import ParticipentList from "../ParticipentList/ParticipentList";
import TeamsList from "../TeamsList/TeamsList";
import "./tournament-setup-step-two.scss";
const shuffle = require("shuffle-array");

class TournamentSetupStepTwo extends Component {
  randomizeTeams = () => {
    const shuffledParticipents = shuffle([...this.props.participents]);
    const shuffledTeams = shuffle([...this.props.teams]);
    const generatedTeams = this.randomTwoVsTwo(
      shuffledParticipents,
      shuffledTeams
    );

    this.props.onRandomTeams(generatedTeams);
  };
  randomOneVsOne = (participents, teams) => {
    let generatedTeams = [];
    for (let i = 0; i < participents.length; i++) {
      generatedTeams = [
        ...generatedTeams,
        {
          participents: [participents[i].name],
          team: teams[i].name
        }
      ];
    }
    return generatedTeams;
  };
  randomTwoVsTwo = (participents, teams) => {
    let generatedTeams = [];
    let teamIndex = 0;
    for (let i = 0; i < participents.length; i = i + 2) {
      generatedTeams = [
        ...generatedTeams,
        {
          participents: [participents[i].name, participents[i + 1].name],
          team: teams[teamIndex].name
        }
      ];
      teamIndex++;
    }
    return generatedTeams;
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
