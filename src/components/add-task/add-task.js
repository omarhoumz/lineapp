import React from 'react'
import PropTypes from 'prop-types'

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
    <React.Fragment>
      <h4>Add a task</h4>
      <p>
        <small className="lead">
          Add your tasks and todos to get organized.
        </small>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task" className="sr-only">
            Add a new Task
          </label>
          <input
            type="text"
            id="task"
            title="task"
            placeholder="Add a new Task"
            value={task}
            onChange={e => setTask(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-info d-inline-flex">
            <i className="material-icons mr-2">add</i> Add Task
          </button>
        </div>
      </form>
    </React.Fragment>
  )
}

AddTask.defaultProps = {
  onAddTask: null,
}

AddTask.propTypes = {
  onAddTask: PropTypes.func,
}

export default AddTask
