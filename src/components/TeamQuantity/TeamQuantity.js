import React, { Component } from "react";
import "./team-quantity.scss";

class TeamQuantity extends Component {
  render() {
    return (
      <div className="team-quantity">
        {/* <h2>What kind of tournament do you want to play?</h2> */}
        <div className="team-quantity__cards">
          <div
            onClick={() => this.props.onTeamQuantity(1)}
            className="team-quantity__cards__card"
          >
            <i className="fas fa-gamepad" />
            <span>VS</span>
            <i className="fas fa-gamepad" />
          </div>
          <div
            onClick={() => this.props.onTeamQuantity(2)}
            className="team-quantity__cards__card"
          >
            <div className="two-controllers">
              <i className="fas fa-gamepad" />
              <i className="fas fa-gamepad" />
            </div>
            <span>VS</span>
            <div className="two-controllers">
              <i className="fas fa-gamepad" />
              <i className="fas fa-gamepad" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamQuantity;
