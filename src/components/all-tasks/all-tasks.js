import React from 'react'
import PropTypes from 'prop-types'

import AllTasksUndone from '../all-tasks-undone/all-tasks-undone'
import AllTasksDone from '../all-tasks-done/all-tasks-done'

const AllTasks = ({ tasks, onClickDoneAll, onClickDeleteAll, updateTask }) => {
  const doneTasks = tasks.filter(task => task.done)
  const undoneTasks = tasks.filter(task => !task.done)

  return (
    <div className="row">
      <AllTasksUndone
        onClickDeleteAll={onClickDeleteAll}
        onClickDoneAll={onClickDoneAll}
        undoneTasks={undoneTasks}
        updateTask={updateTask}
      />
      <AllTasksDone doneTasks={doneTasks} updateTask={updateTask} />
    </div>
  )
}

AllTasks.propTypes = {
  tasks: PropTypes.array,
  onClickDeleteAll: PropTypes.func,
  onClickDoneAll: PropTypes.func,
  updateTask: PropTypes.func,
}

export default AllTasks
