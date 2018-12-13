import React, { Component } from "react";
import TeamQuantity from "../../components/TeamQuantity/TeamQuantity";
import ThreeStepNavigator from "../../components/ThreeStepNavigator/ThreeStepNavigator";
import TorunamentSetupStepTwo from "../../components/TournamentSetupStepTwo/TournamentSetupStepTwo";
import "./tournament-setup-page.scss";

class TorunamentSetupPage extends Component {
  state = {
    participents: [],
    teams: [],
    generatedTeams: [],
    oneOnOne: false,
    twoOntwo: false,
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
        oneOnOne: true,
        step: 2
      });
    } else if (option === 2) {
      this.setState({
        twoOntwo: true,
        step: 2
      });
    }
  };

  handleAddParticipent = participent => {
    this.setState({
      participents: [
        ...this.state.participents,
        { name: participent, img: "images/player.png" }
      ]
    });
  };

  handleAddTeam = team => {
    this.setState({
      teams: [...this.state.teams, { name: team, img: "images/badge.png" }]
    });
  };

  handleDeleteParticipent = participent => {
    const participents = this.state.participents.filter(
      p => p.name !== participent
    );
    this.setState({ participents: participents });
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
                    onAddParticipent={this.handleAddParticipent}
                    onDeleteParticipent={this.handleDeleteParticipent}
                    participents={this.state.participents}
                    onAddTeam={this.handleAddTeam}
                    onDeleteTeam={this.handleDeleteTeam}
                    teams={this.state.teams}
                    onRandomTeams={this.handleRandomTeams}
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
