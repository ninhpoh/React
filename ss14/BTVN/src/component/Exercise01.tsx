import React, { Component } from 'react';

class Exercise01 extends Component {
  state = {
    userName: 'Tran An Ninh'
  };

  render() {
    return (
      <div>
        <h2>Exercise 01</h2>
        <p>Tên của tôi là: {this.state.userName}</p>
      </div>
    );
  }
}

export default Exercise01;