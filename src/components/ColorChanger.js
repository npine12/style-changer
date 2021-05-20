import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select onChange={(e) => this.props.update(e.target.value)}
        disabled={this.props.allowEdit === "false" ? true : false} className="dropDownContainer">
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
        <option value="pink"> Pink </option>
      </select>
    );
  }
}
