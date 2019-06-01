import React, { Component } from 'react'
import Cookies from 'universal-cookie'

import { Task } from '../task/task'
import { TaskDone } from '../task-done/task-done'

import './main.css'

const tasksCookie = new Cookies()
const cookieKey = 'allTasks'

class Main extends Component {
  constructor(props) {
    super(props)

    const allTasksCookie = tasksCookie.get(cookieKey)

    this.state = {
      task: '',
      allTasks: allTasksCookie || [],
    }
  }

  updateCookie = (cookieName, cookieKey, cookieValue) => {
    cookieName.set(cookieKey, cookieValue, { path: '/' })
  }

  updateTasks = cookieValue => {
    this.updateCookie(tasksCookie, cookieKey, JSON.stringify(cookieValue))
  }

  delete_all = () => {
    this.updateTask(null, 'DELETE_ALL')
  }

  done_all = () => {
    this.updateTask(null, 'DONE_ALL')
  }

  handleAddTask = taskName => {
    if (taskName) {
      const task = {
        key: new Date(),
        name: taskName,
        done: false,
      }

      this.setState(
        prevState => ({
          allTasks: [...prevState.allTasks, task],
          task: '',
        }),
        () => {
          this.updateTasks(this.state.allTasks)
        }
      )
    }
    return null
  }

  handleEnter = e => {
    if (e.key === 'Enter') {
      this.handleAddTask(e.target.value)
    }
  }

  handleTaskChange = e => {
    this.setState({
      task: e.target.value,
    })
  }

  updateTask = (key, action) => {
    switch (action) {
      case 'DELETE':
        this.setState(
          prevState => ({
            allTasks: prevState.allTasks.filter(task => task.key !== key),
          }),
          () => {
            this.updateTasks(this.state.allTasks)
          }
        )
        break

      case 'DONE':
        this.setState(
          prevState => ({
            allTasks: prevState.allTasks.map(task => {
              if (task.key === key) {
                return { ...task, done: true }
              }
              return { ...task }
            }),
          }),
          () => {
            this.updateTasks(this.state.allTasks)
          }
        )
        break

      case 'UNDO':
        this.setState(
          prevState => ({
            allTasks: prevState.allTasks.map(task => {
              if (task.key === key) {
                return { ...task, done: false }
              }
              return { ...task }
            }),
          }),
          () => {
            this.updateTasks(this.state.allTasks)
          }
        )
        break

      case 'EDIT':
        console.log(`${action} action not yet supported`) // eslint-disable-line no-console
        break

      case 'DELETE_ALL':
        this.setState({ allTasks: [] }, () => {
          this.updateTasks([])
        })
        break

      case 'DONE_ALL':
        this.setState(
          prevState => ({
            allTasks: prevState.allTasks.map(task => ({ ...task, done: true })),
          }),
          () => {
            this.updateTasks(this.state.allTasks)
          }
        )

        break

      default:
        break
    }
  }

  render() {
    const { task, allTasks } = this.state

    const doneTasks = allTasks.filter(task => task.done)
    const undoneTasks = allTasks.filter(task => !task.done)

    return (
      <main className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-sm add-task">
              <h4>Add a task</h4>
              <p>
                <small className="lead">
                  Add your tasks and todos to get organized.
                </small>
              </p>
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
                  onChange={this.handleTaskChange}
                  onKeyPress={this.handleEnter}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-info d-inline-flex"
                  onClick={e => this.handleAddTask(e.target.value)}
                >
                  <i className="material-icons mr-2">add</i> Add Task
                </button>
              </div>
              <br />
              <br />
            </div>
            <div className="col-sm all-tasks">
              <h4>
                My tasks
                <i
                  className="material-icons right small act-btn tooltipped"
                  data-position="top"
                  data-delay="20"
                  data-tooltip="Delete All Tasks"
                  onClick={this.delete_all}
                >
                  delete_sweep
                </i>
                <i
                  className="material-icons right small act-btn tooltipped"
                  data-position="top"
                  data-delay="20"
                  data-tooltip="All Tasks Done"
                  onClick={this.done_all}
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
                      updateTask={this.updateTask}
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
                      updateTask={this.updateTask}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Main
