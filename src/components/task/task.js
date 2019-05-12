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
        <div className="inner-task">
          <span className="task-title">{this.props.task.name}</span>
          <div className="actions">
            <i className="material-icons act-btn" onClick={this.done}>
              check_circle
            </i>
            <i className="material-icons act-btn" onClick={this.edit}>
              edit
            </i>
            <i className="material-icons act-btn" onClick={this.delete}>
              delete
            </i>
          </div>
        </div>
      </div>
    )
  }
}
