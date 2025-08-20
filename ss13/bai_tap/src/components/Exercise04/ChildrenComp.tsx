import React, { Component } from 'react';

interface Props {
  name: string;
}

export default class ChildrenComp extends Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>Họ và tên bên component con: {name}</h2>
      </div>
    );
  }
}