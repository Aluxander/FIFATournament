import React, { Component } from "react";
import "./team.scss";
class Team extends Component {
  render() {
    const { team } = this.props;
    return (
      <div className="team">
        <div className="team__image-name">
          <div className="team__image">
            <img src={team.img} />
          </div>
          <div className="team__name">{team.name}</div>
        </div>
        <i
          onClick={() => this.props.onDeleteTeam(team.name)}
          className="fa fa-remove remove"
        />
      </div>
    );
  }
}

export default Team;
