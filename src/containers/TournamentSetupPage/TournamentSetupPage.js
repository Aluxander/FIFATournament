import React, { Component } from "react";
import ParticipentList from "../../components/ParticipentList/ParticipentList";
import TeamQuantity from "../../components/TeamQuantity/TeamQuantity";
import ThreeStepNavigator from "../../components/ThreeStepNavigator/ThreeStepNavigator";
import TorunamentSetupStepTwo from "../../components/TournamentSetupStepTwo/TournamentSetupStepTwo";
import "./tournament-setup-page.scss";

class TorunamentSetupPage extends Component {
  state = {
    participents: [],
    teams: [],
    oneOnOne: false,
    twoOntwo: false,
    step: 1
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
                    participents={this.state.participents}
                    onAddTeam={this.handleAddTeam}
                    teams={this.state.teams}
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
