import React, { Component } from "react";
import Participent from "../Participent/Participent";
import "./participent-list.scss";

class ParticipentList extends Component {
  state = {
    inputName: ""
  };

  handleInputName = ({ target }) => {
    this.setState({ inputName: target.value });
  };

  handleInputKeyDown = ({ keyCode, target }) => {
    if (keyCode !== 13 || target.value === null) return null;
    this.addParticipent(this.state.inputName);
  };

  addParticipent = inputName => {
    if (inputName === "") return null;
    this.props.onAddParticipent(inputName);
    this.setState({ inputName: "" });
  };

  render() {
    const { participents } = this.props;

    return (
      <div className="participent-list">
        <h3>Participents</h3>
        <div className="participent-list__add">
          <input
            type="name"
            className="form-control"
            id="participent-name"
            value={this.state.inputName}
            placeholder="Name"
            onChange={this.handleInputName}
            onKeyDown={this.handleInputKeyDown}
          />
          <button
            onClick={() => this.addParticipent(this.state.inputName)}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
        <div className="participent-list__listing">
          {participents.map(participent => (
            <Participent
              key={participent.name}
              participent={participent}
              onDeleteParticipent={this.props.onDeleteParticipent}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ParticipentList;
