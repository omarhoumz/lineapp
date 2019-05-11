import React, { Component } from 'react'

import './task.css'

export class Task extends Component {
  delete = () => {
    this.props.updateTask(this.props.task.key, 'DELETE')
  }

  done = () => {
    this.props.updateTask(this.props.task.key, 'DONE')
  }

  edit = () => {
    this.props.updateTask(this.props.task.key, 'EDIT')
  }

  render() {
    return (
      <div className="task">
        <span>{this.props.task.name}</span>
        <div className="right">
          <i className="material-icons right act-btn" onClick={this.delete}>
            delete
          </i>
          <i className="material-icons right act-btn" onClick={this.done}>
            done
          </i>
          <i className="material-icons right act-btn" onClick={this.edit}>
            edit
          </i>
        </div>
      </div>
    )
  }
}
