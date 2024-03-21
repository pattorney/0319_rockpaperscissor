import React, { Component } from 'react';

export default class BoxClass extends Component {
  render() {
    return (
      <div className="box" style={this.props.boxstyle}>
        <h1>{this.props.title}</h1>
        <img className="item-img" src={this.props.item && this.props.item.img} alt="가위바위보 그림" />
        <h2>{this.props.result}</h2>
      </div>
    );
  }
}
