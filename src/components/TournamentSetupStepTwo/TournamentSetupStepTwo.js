import React, { Component } from "react";
import ParticipantList from "../ParticipantList/ParticipantList";
import TeamsList from "../TeamsList/TeamsList";
import "./tournament-setup-step-two.scss";
const shuffle = require("shuffle-array");

class TournamentSetupStepTwo extends Component {
  state = {
    errorClass: "hide",
    errorMessage: ""
  };

  randomizeTeams = () => {
    const shuffledParticipants = shuffle([...this.props.participants]);
    const shuffledTeams = shuffle([...this.props.teams]);
    let generatedTeams = [];
    if (this.props.oneVsOne) {
      if (this.isCorrectOneVsOne())
        generatedTeams = this.randomOneVsOne(
          shuffledParticipants,
          shuffledTeams
        );
    }
    if (this.props.twoVsTwo) {
      if (this.isCorrectTwoVsTwo())
        generatedTeams = this.randomOneVsOne(
          shuffledParticipants,
          shuffledTeams
        );
    }
    if (generatedTeams.length > 0) {
      this.props.onRandomTeams(generatedTeams);
    }
  };

  randomOneVsOne = (participants, teams) => {
    let generatedTeams = [];
    for (let i = 0; i < participants.length; i++) {
      generatedTeams = [
        ...generatedTeams,
        {
          participants: [participants[i].name],
          team: teams[i].name
        }
      ];
    }
    return generatedTeams;
  };

  randomTwoVsTwo = (participants, teams) => {
    let generatedTeams = [];
    let teamIndex = 0;
    for (let i = 0; i < participants.length; i = i + 2) {
      generatedTeams = [
        ...generatedTeams,
        {
          participants: [participants[i].name, participants[i + 1].name],
          team: teams[teamIndex].name
        }
      ];
      teamIndex++;
    }
    return generatedTeams;
  };

  isCorrectOneVsOne = () => {
    if (
      this.props.participants.length === this.props.teams.length &&
      this.props.teams.length > 2 &&
      this.props.participants.length > 2
    ) {
      this.setState({
        errorClass: "hide"
      });
      return true;
    }
    this.setState({
      errorClass: "show",
      errorMessage:
        "For 1v1, there should be as many participants as there are teams. With a minimum of three teams!"
    });
    return false;
  };

  isCorrectTwoVsTwo = () => {
    if (
      this.props.participants.length / 2 === this.props.teams.length &&
      this.props.teams.length > 2 &&
      this.props.participants.length > 2
    ) {
      this.setState({
        errorClass: "hide"
      });
      return true;
    }
    this.setState({
      errorClass: "show",
      errorMessage:
        "For 2v2, there should be twice as many participants as thera are teams. With a minimum of three teams!"
    });
    return false;
  };

  render() {
    return (
      <div className="tournament-setup-step-two">
        <div className="tournament-list-wrapper">
          <ParticipantList
            onAddParticipant={this.props.onAddParticipant}
            onDeleteParticipant={this.props.onDeleteParticipant}
            participants={this.props.participants}
          />
          <TeamsList
            onAddTeam={this.props.onAddTeam}
            onDeleteTeam={this.props.onDeleteTeam}
            teams={this.props.teams}
          />
        </div>
        <div className="tournament-setup-step-two__btn">
          <button onClick={this.randomizeTeams} className="btn btn-primary">
            Generate teams
          </button>
          <span className={this.state.errorClass + " error"}>
            {this.state.errorMessage}
          </span>
        </div>
      </div>
    );
  }
}

export default TournamentSetupStepTwo;
