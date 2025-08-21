import React, { Component } from 'react';

class Exercise04 extends Component {
  state = {
    slogan: "Học code để làm"
  };

  handleChangeState = () => {
    this.setState({
      slogan: "Học code thành công. Cố lên!!"
    });
  };

  render() {
    return (
      <div>
        <h2>Slogan:</h2>
        <p>{this.state.slogan}</p>
        <button onClick={this.handleChangeState}>Change state</button>
      </div>
    );
  }
}

export default Exercise04;