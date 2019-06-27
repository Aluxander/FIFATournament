import React, { Component } from "react";
import Robin from "roundrobin";

class TournamentViewPage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="match-row">
        <span>{this.props.match[0].team}</span>
        <input class={this.props.match[0].id} />
        <input class={this.props.match[1].id} />
        <span>{this.props.match[1].team}</span>
      </div>
    );
  }
}

export default TournamentViewPage;
