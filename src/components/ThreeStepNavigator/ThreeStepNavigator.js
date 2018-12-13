import React, { Component } from "react";
import "./three-step-navigator.scss";

class ThreeStepNavigator extends Component {
  render() {
    const { step } = this.props;
    return (
      <div className="container-fluid">
        <br />
        <br />
        <ul className="list-unstyled multi-steps">
          <li
            onClick={() => this.props.onStep(1)}
            className={step === 1 ? "is-active" : ""}
          >
            Step 1
          </li>
          <li
            onClick={() => this.props.onStep(2)}
            className={step === 2 ? "is-active" : ""}
          >
            Step 2
          </li>
          <li
            onClick={() => this.props.onStep(3)}
            className={step === 3 ? "is-active" : ""}
          >
            Step 3
          </li>
        </ul>
      </div>
    );
  }
}

export default ThreeStepNavigator;
