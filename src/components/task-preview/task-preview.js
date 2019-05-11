import React, { Component } from 'react'

import './task-preview.css'

export class TaskPreview extends Component {
  render() {
    return (
      <div className="task preview col s12">
        <span>{this.props.task}</span>
        <div className="right">
          <i className="material-icons right act-btn">delete</i>
          <i className="material-icons right act-btn">done</i>
          <i className="material-icons right act-btn">edit</i>
        </div>
        <div className="clear" />
      </div>
    )
  }
}
