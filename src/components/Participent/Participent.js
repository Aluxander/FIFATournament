import React, { Component } from "react";
import "./participent.scss";
class Participent extends Component {
  render() {
    const { participent } = this.props;
    return (
      <div className="participent">
        <div className="participent__image">
          <img src={participent.img} />
        </div>
        <div className="participent__name">{participent.name}</div>
      </div>
    );
  }
}

export default Participent;
