import React from 'react'
import PropTypes from 'prop-types'

import { Task } from '../task/task'
import { TaskDone } from '../task-done/task-done'

const AllTasks = ({ tasks, delete_all, done_all, updateTask }) => {
  const doneTasks = tasks.filter(task => task.done)
  const undoneTasks = tasks.filter(task => !task.done)

  return (
    <>
      <h4>
        My tasks
        <i
          className="material-icons right small act-btn tooltipped"
          data-position="top"
          data-delay="20"
          data-tooltip="Delete All Tasks"
          onClick={delete_all}
        >
          delete_sweep
        </i>
        <i
          className="material-icons right small act-btn tooltipped"
          data-position="top"
          data-delay="20"
          data-tooltip="All Tasks Done"
          onClick={done_all}
        >
          done_all
        </i>
      </h4>
      <hr />
      <div className="task-container my-tasks-container">
        {undoneTasks.length === 0 ? (
          <>
            <div>No tasks</div>
            <br />
          </>
        ) : (
          undoneTasks.map(task => (
            <Task
              task={task}
              key={JSON.stringify(task)}
              updateTask={updateTask}
            />
          ))
        )}
      </div>
      <h5>Done tasks</h5>
      <hr />
      <div className="task-container tasks-done-container">
        {doneTasks.length === 0 ? (
          <>
            <div>No done tasks</div>
            <br />
          </>
        ) : (
          doneTasks.map(task => (
            <TaskDone
              task={task}
              key={JSON.stringify(task)}
              updateTask={updateTask}
            />
          ))
        )}
      </div>
    </>
  )
}

AllTasks.propTypes = {
  tasks: PropTypes.array,
  delete_all: PropTypes.func,
  done_all: PropTypes.func,
  updateTask: PropTypes.func,
}

export default AllTasks
