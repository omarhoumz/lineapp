import React, { Component } from 'react'
import Cookies from 'universal-cookie'

import AddTask from '../add-task/add-task'
import AllTasks from '../all-tasks/all-tasks'
import './main.css'

const tasksCookie = new Cookies()
const cookieKey = 'allTasks'

const TASK_ACTION = {
  DONE: 'DONE',
  UNDO: 'UNDO',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  DONE_ALL: 'DONE_ALL',
  DELETE_ALL: 'DELETE_ALL',
}

class Main extends Component {
  constructor(props) {
    super(props)

    const allTasksCookie = tasksCookie.get(cookieKey)

    this.state = {
      allTasks: allTasksCookie || [],
    }
  }

  updateCookie = (cookieName, cookieKey, cookieValue) => {
    cookieName.set(cookieKey, cookieValue, { path: '/' })
  }

  updateTasks = cookieValue => {
    this.updateCookie(tasksCookie, cookieKey, JSON.stringify(cookieValue))
  }

  onClickDoneAll = () => {
    this.updateTask(null, TASK_ACTION.DONE_ALL)
  }

  onClickDeleteAll = () => {
    this.updateTask(null, TASK_ACTION.DELETE_ALL)
  }

  handleAddTask = taskName => {
    if (taskName) {
      const task = {
        key: new Date().toString(),
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
      case TASK_ACTION.DELETE:
        this.setState(
          prevState => ({
            allTasks: prevState.allTasks.filter(task => task.key !== key),
          }),
          () => {
            this.updateTasks(this.state.allTasks)
          }
        )
        break

      case TASK_ACTION.DONE:
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

      case TASK_ACTION.UNDO:
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

      case TASK_ACTION.EDIT:
        console.info(`The ${action} action not yet supported`) // eslint-disable-line no-console
        break

      case TASK_ACTION.DELETE_ALL:
        this.setState({ allTasks: [] }, () => {
          this.updateTasks([])
        })
        break

      case TASK_ACTION.DONE_ALL:
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
    const { allTasks } = this.state

    return (
      <main className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 offset-md-3">
              <AddTask onAddTask={this.handleAddTask} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm all-tasks">
              <AllTasks
                tasks={allTasks}
                onClickDoneAll={this.onClickDoneAll}
                onClickDeleteAll={this.onClickDeleteAll}
                updateTask={this.updateTask}
              />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Main
