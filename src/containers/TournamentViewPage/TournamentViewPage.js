import React, { Component } from "react";
import Robin from "roundrobin";
import MatchRow from "./components/MatchRow";

class TournamentViewPage extends Component {
  state = {
    schedule: [],
    teams: [
      { id: 1, participants: "Alex", team: "Manchester United" },
      { id: 2, participants: "Jesper", team: "Real Madrid" },
      { id: 3, participants: "Leo", team: "Barcelona" },
      { id: 4, participants: "Kalle", team: "PSG" }
    ],
    table: []
  };

  componentDidMount() {
    this.createScheduleAndTable();
  }

  createScheduleAndTable = () => {
    const matches = Robin(this.state.teams.length, this.state.teams);
    let schedule = [];
    matches.map(x => {
      x.map(y => {
        schedule = [...schedule, y];
      });
    });

    const table = this.state.teams.map(obj => {
      return {
        ...obj,
        points: 0,
        played: 0
      };
    });

    this.setState({
      schedule: schedule,
      table: table
    });
  };

  render() {
    return (
      <div className="tournament-view-page">
        {this.state.schedule.map(match => {
          return <MatchRow match={match} />;
        })}
      </div>
    );
  }
}

export default TournamentViewPage;
