import React from 'react'
import PropTypes from 'prop-types'

import { TaskDone } from '../task-done/task-done'

const AllTasksDone = ({ doneTasks, updateTask }) => {
  return (
    <div className="col-sm">
      <h4>Done tasks</h4>
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
    </div>
  )
}

AllTasksDone.propTypes = {
  doneTasks: PropTypes.array.isRequired,
  updateTask: PropTypes.func.isRequired,
}

export default AllTasksDone
