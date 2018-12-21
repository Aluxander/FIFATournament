import React, { Component } from "react";
import Participant from "../Participant/Participant";
import "./participant-list.scss";

class ParticipantList extends Component {
  state = {
    inputName: ""
  };

  handleInputName = ({ target }) => {
    this.setState({ inputName: target.value });
  };

  handleInputKeyDown = ({ keyCode, target }) => {
    if (keyCode !== 13 || target.value === null) return null;
    this.addParticipant(this.state.inputName);
  };

  addParticipant = inputName => {
    if (inputName === "") return null;
    this.props.onAddParticipant(inputName);
    this.setState({ inputName: "" });
  };

  render() {
    const { participants } = this.props;

    return (
      <div className="participant-list">
        <h3>Participants</h3>
        <div className="participant-list__add">
          <input
            type="name"
            className="form-control"
            id="participant-name"
            value={this.state.inputName}
            placeholder="Name"
            onChange={this.handleInputName}
            onKeyDown={this.handleInputKeyDown}
          />
          <button
            onClick={() => this.addParticipant(this.state.inputName)}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
        <div className="participant-list__listing">
          {participants.map(participant => (
            <Participant
              key={participant.name}
              participant={participant}
              onDeleteParticipant={this.props.onDeleteParticipant}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ParticipantList;
