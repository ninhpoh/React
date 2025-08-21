import React, { Component } from 'react';

class Exercise02 extends Component {
  componentDidMount() {
    console.log("Component đã được mount");
  }

  render() {
    return (
      <div>
        <h2>Exercise02 Component</h2>
        <p>Đây là component Exercise02.</p>
      </div>
    );
  }
}

export default Exercise02;