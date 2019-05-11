import React, { Component } from 'react'
// import { uniqueId } from 'lodash';
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

  updateCookie(cookieName, cookieKey, cookieValue) {
    cookieName.set(cookieKey, cookieValue, { path: '/' })
  }

  delete_all() {
    this.updateTask(null, 'DELETE_ALL')
  }

  done_all() {
    this.updateTask(null, 'DONE_ALL')
  }

  prevTask(task) {
    this.setState({ task })
  }

  handlePrev(e) {
    const task = e.target.value
    this.prevTask(task)
  }

  handleAddTask(taskName) {
    if (taskName) {
      const task = {
        key: new Date(),
        name: taskName,
        done: false,
      }
      let allTasks = this.state.allTasks
      allTasks.push(task)

      let data = JSON.stringify(allTasks)
      this.updateCookie(tasksCookie, cookieKey, data)

      allTasks = tasksCookie.get('allTasks')

      this.setState({ allTasks })

      this.setState({ task: '' })
    }
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      this.handleAddTask(e.target.value)
    }
  }

  updateTask(key, action) {
    switch (action) {
      case 'DELETE':
        if (this.state.allTasks.filter(task => task.key === key).length > 0) {
          let allTasks = this.state.allTasks
          allTasks.splice(key, 1)
          this.setState({ allTasks })

          let data = JSON.stringify(this.state.allTasks)
          this.updateCookie(tasksCookie, cookieKey, data)

          // console.log(tasksCookie.get('allTasks'));
        } else {
          console.log('Item not found')
        }

        break
      case 'DONE':
        if (this.state.allTasks.filter(task => task.key === key).length > 0) {
          let allTasks = this.state.allTasks
          allTasks.filter(function(task) {
            if (task.key === key) {
              return (task.done = true)
            }
            return ''
          })

          let data = JSON.stringify(allTasks)
          this.updateCookie(tasksCookie, cookieKey, data)

          allTasks = tasksCookie.get('allTasks')

          this.setState({ allTasks })
        } else {
          console.log('Item not found')
        }

        break
      case 'UNDO':
        if (this.state.allTasks.filter(task => task.key === key).length > 0) {
          let allTasks = this.state.allTasks
          allTasks.filter(function(task) {
            if (task.key === key) {
              return (task.done = false)
            }
            return ''
          })

          let data = JSON.stringify(allTasks)
          this.updateCookie(tasksCookie, cookieKey, data)

          allTasks = tasksCookie.get('allTasks')

          this.setState({ allTasks })
        } else {
          console.log('Item not found')
        }

        break
      case 'EDIT':
        console.log(action, key)
        break
      case 'DELETE_ALL':
        tasksCookie.set(cookieKey, [], { path: '/' })
        this.setState({ allTasks: [] })
        break
      case 'DONE_ALL':
        let allTasks = this.state.allTasks
        allTasks.map(task => (task.done = true))

        let data = JSON.stringify(allTasks)
        this.updateCookie(tasksCookie, cookieKey, data)

        allTasks = tasksCookie.get('allTasks')

        this.setState({ allTasks })

        break
      default:
    }
  }

  render() {
    const { task, allTasks } = this.state

    return (
      <main className="main-content">
        <div className="container">
          <div className="row">
            <div className="col s11 m6 l5 add-task">
              <h4>Add a task</h4>
              <h5 class="lead">Add your tasks and todos to get organized.</h5>
              <br />
              <div className="form-group">
                <label htmlFor="task">My Task</label>
                <input
                  type="text"
                  id="task"
                  title="task"
                  value={task}
                  onChange={this.handlePrev.bind(this)}
                  onKeyPress={this.handleEnter.bind(this)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-info d-inline-flex"
                  onClick={this.handleAddTask.bind(this, task)}
                >
                  <i className="material-icons mr-2">add</i> Add Task
                </button>
              </div>
            </div>
            <div className="col s11 m6 offset-l1 l6 all-tasks">
              <h4>
                My tasks
                <i
                  className="material-icons right small act-btn tooltipped"
                  data-position="top"
                  data-delay="20"
                  data-tooltip="Delete All Tasks"
                  onClick={this.delete_all.bind(this)}
                >
                  delete_sweep
                </i>
                <i
                  className="material-icons right small act-btn tooltipped"
                  data-position="top"
                  data-delay="20"
                  data-tooltip="All Tasks Done"
                  onClick={this.done_all.bind(this)}
                >
                  done_all
                </i>
              </h4>
              <hr />
              <div className="task-container">
                {allTasks &&
                  allTasks.map(
                    task =>
                      !task.done && (
                        <Task
                          task={task}
                          key={task.key}
                          updateTask={this.updateTask.bind(this)}
                        />
                      )
                  )}
              </div>
              <div className="task-done-container">
                <h5>Done tasks</h5>
                <hr />
                {allTasks &&
                  allTasks.map(
                    task =>
                      task.done && (
                        <TaskDone
                          task={task}
                          key={task.key}
                          updateTask={this.updateTask.bind(this)}
                        />
                      )
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
