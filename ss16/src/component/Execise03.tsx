import React, { Component } from "react";

interface State {
  color: string[];
}

export default class Exercise03 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: ["primary", "secondary", "success", "warning", "info","light","dark"],
    };
  }

  render() {
    return (
      <>
          {this.state.color.map((color) => (
              <button className={`btn btn-${color}`} style={{ margin: "8px" }}>{color}</button>
          ))}
      </>
    );
  }
}