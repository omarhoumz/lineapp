import React from 'react'
import PropTypes from 'prop-types'

import { Task } from '../task/task'

const AllTasksUndone = ({
  onClickDeleteAll,
  onClickDoneAll,
  undoneTasks,
  updateTask,
}) => {
  return (
    <div className="col-sm">
      <h4>
        My tasks
        <i
          className="material-icons right small act-btn"
          onClick={onClickDeleteAll}
        >
          delete_sweep
        </i>
        <i
          className="material-icons right small act-btn"
          onClick={onClickDoneAll}
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
    </div>
  )
}

AllTasksUndone.propTypes = {
  onClickDeleteAll: PropTypes.func.isRequired,
  onClickDoneAll: PropTypes.func.isRequired,
  undoneTasks: PropTypes.array.isRequired,
  updateTask: PropTypes.func.isRequired,
}

export default AllTasksUndone
