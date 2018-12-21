import React, { Component } from "react";
import TeamQuantity from "../../components/TeamQuantity/TeamQuantity";
import ThreeStepNavigator from "../../components/ThreeStepNavigator/ThreeStepNavigator";
import TorunamentSetupStepTwo from "../../components/TournamentSetupStepTwo/TournamentSetupStepTwo";
import "./tournament-setup-page.scss";

class TorunamentSetupPage extends Component {
  state = {
    participants: [],
    teams: [],
    generatedTeams: [],
    oneVsOne: false,
    twoVsTwo: false,
    step: 1
  };

  handleRandomTeams = generatedTeams => {
    console.log(generatedTeams);
    this.setState({ generatedTeams: generatedTeams });
  };

  handleStep = step => {
    switch (step) {
      case 1:
        this.setState({
          step: 1
        });
        break;
      case 2:
        this.setState({
          step: 2
        });
        break;
      case 3:
        this.setState({
          step: 3
        });
        break;
      default:
        this.setState({
          step: 1
        });
    }
  };

  handleTeamQuantity = option => {
    if (option === 1) {
      this.setState({
        oneVsOne: true,
        step: 2
      });
    } else if (option === 2) {
      this.setState({
        twoVsTwo: true,
        step: 2
      });
    }
  };

  handleAddParticipant = participant => {
    this.setState({
      participants: [
        ...this.state.participants,
        { name: participant, img: "images/player.png" }
      ]
    });
  };

  handleAddTeam = team => {
    this.setState({
      teams: [...this.state.teams, { name: team, img: "images/badge.png" }]
    });
  };

  handleDeleteParticipant = participant => {
    const participants = this.state.participants.filter(
      p => p.name !== participant
    );
    this.setState({ participants: participants });
  };

  handleDeleteTeam = team => {
    const teams = this.state.teams.filter(t => t.name !== team);
    this.setState({ teams: teams });
  };

  render() {
    return (
      <div className="tournament-setup-page">
        <ThreeStepNavigator step={this.state.step} onStep={this.handleStep} />
        <div className="tournament-setup-page__steps">
          {(() => {
            switch (this.state.step) {
              case 1:
                return (
                  <TeamQuantity onTeamQuantity={this.handleTeamQuantity} />
                );
              case 2:
                return (
                  <TorunamentSetupStepTwo
                    onAddParticipant={this.handleAddParticipant}
                    onDeleteParticipant={this.handleDeleteParticipant}
                    participants={this.state.participants}
                    onAddTeam={this.handleAddTeam}
                    onDeleteTeam={this.handleDeleteTeam}
                    teams={this.state.teams}
                    onRandomTeams={this.handleRandomTeams}
                    oneVsOne={this.state.oneVsOne}
                    twoVsTwo={this.state.twoVsTwo}
                  />
                );
              default:
                return null;
            }
          })()}
        </div>
      </div>
    );
  }
}

export default TorunamentSetupPage;
