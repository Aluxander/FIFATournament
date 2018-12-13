import React, { Component } from "react";
import "./team.scss";
class Team extends Component {
  render() {
    const { team } = this.props;
    return (
      <div className="team">
        <div className="team__image">
          <img src={team.img} />
        </div>
        <div className="team__name">{team.name}</div>
      </div>
    );
  }
}

export default Team;
