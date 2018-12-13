import React, { Component } from "react";
import Team from "../Team/Team";
import "./teams-list.scss";

class TeamsList extends Component {
  state = {
    inputTeam: ""
  };

  handleInputTeam = ({ target }) => {
    this.setState({ inputTeam: target.value });
  };

  handleInputKeyDown = ({ keyCode, target }) => {
    console.log(target);
    if (keyCode !== 13 || target.value === null) return null;
    this.addTeam(this.state.inputTeam);
  };

  addTeam = inputTeam => {
    console.log(inputTeam);
    if (inputTeam === "") return null;
    this.props.onAddTeam(inputTeam);
    this.setState({ inputTeam: "" });
  };

  render() {
    const { teams } = this.props;

    return (
      <div className="teams-list">
        <h3>Add teams</h3>
        <div className="teams-list__add">
          <input
            type="team"
            className="form-control"
            id="teams-name"
            value={this.state.inputTeam}
            placeholder="Team"
            onChange={this.handleInputTeam}
            onKeyDown={this.handleInputKeyDown}
          />
          <button
            onClick={() => this.addTeam(this.state.inputTeam)}
            class="btn btn-primary"
          >
            Add
          </button>
        </div>
        <div className="teams-list__listing">
          {teams.map(team => (
            <Team key={team} team={team} />
          ))}
        </div>
      </div>
    );
  }
}

export default TeamsList;
