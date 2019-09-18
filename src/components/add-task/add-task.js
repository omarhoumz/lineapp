import React from 'react'
import PropTypes from 'prop-types'

import './add-task.css'

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    if (onAddTask) {
      onAddTask(task)
      setTask('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <label htmlFor="task" className="sr-only">
        Add a task
      </label>
      <div className="input-group my-1 mr-sm-2">
        <input
          type="text"
          id="task"
          title="task"
          placeholder="Add a new Task"
          aria-label="Add a new Task"
          aria-describedby="add-task"
          value={task}
          onChange={e => setTask(e.target.value)}
          className="form-control"
        />
        <div className="input-group-append">
          <button className="btn btn-info d-inline-flex" id="add-task">
            <i className="material-icons mr-2">add</i> Add Task
          </button>
        </div>
      </div>
    </form>
  )
}

AddTask.defaultProps = {
  onAddTask: null,
}

AddTask.propTypes = {
  onAddTask: PropTypes.func,
}

export default AddTask
