import React from 'react'

import { Task } from '../task/task'
import './task-done.css'

export class TaskDone extends Task {
  undo() {
    this.props.updateTask(this.props.task.key, 'UNDO')
  }

  render() {
    return (
      <div className="task done">
        <span>{this.props.task.name}</span>
        <div className="right">
          <i
            className="material-icons right act-btn"
            onClick={this.delete.bind(this)}
          >
            delete
          </i>
          <i
            className="material-icons right act-btn"
            onClick={this.undo.bind(this)}
          >
            undo
          </i>
        </div>
        <div className="clear" />
      </div>
    )
  }
}
