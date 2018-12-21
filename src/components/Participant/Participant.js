import React, { Component } from "react";
import "./participant.scss";
class Participant extends Component {
  render() {
    const { participant } = this.props;
    return (
      <div className="participant">
        <div className="participant__image-name">
          <div className="participant__image">
            <img src={participant.img} />
          </div>
          <div className="participant__name">{participant.name}</div>
        </div>
        <i
          onClick={() => this.props.onDeleteParticipant(participant.name)}
          className="fa fa-remove remove"
        />
      </div>
    );
  }
}

export default Participant;
