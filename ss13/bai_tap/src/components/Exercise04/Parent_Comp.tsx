import React, { Component } from 'react';
import ChildrenComp from './ChildrenComp';

interface State {
  name: string;
}

export default class ParentComp extends Component <{},State>{
  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'Tran An Ninh'
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h2>Họ và tên bên component cha: {name}</h2>
        <ChildrenComp name={name} />
      </div>
    );
  }
}