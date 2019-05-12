import React from 'react'

import { Task } from '../task/task'
import './task-done.css'

export class TaskDone extends Task {
  undo = () => {
    this.props.updateTask(this.props.task.key, 'UNDO')
  }

  render() {
    return (
      <div className="task done">
        <div className="inner-task">
          <span className="task-title">{this.props.task.name}</span>
          <div className="actions">
            <i className="material-icons act-btn" onClick={this.undo}>
              undo
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
