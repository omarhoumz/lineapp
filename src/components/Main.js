import React, { Component } from 'react';
import '../LineApp.css';
// import { uniqueId } from 'lodash';
import Cookies from 'universal-cookie';

import Task from './Task';
import TaskDone from './TaskDone';
import TaskPreview from './TaskPreview';

const tasksCookie = new Cookies();
const cookieKey = 'allTasks';

class Main extends Component {

    constructor(props) {
        super(props);

        let allTasksFromCookies = []

        if (tasksCookie.get('allTasks') === ''){
            tasksCookie.set(cookieKey, [], { path: '/' });
        } else {
            allTasksFromCookies = tasksCookie.get('allTasks');
        }


        this.state = {
            task: "",
            allTasks: allTasksFromCookies
        }
    }

    updateCookie(cookieName, cookieKey, cookieValue) {
        cookieName.set(cookieKey, cookieValue, { path: '/' });
    }

    delete_all() {
        this.updateTask(null, 'DELETE_ALL');
    }

    done_all() {
        this.updateTask(null, 'DONE_ALL');
    }

    prevTask(task) {
        this.setState({task});
    }

    handlePrev(e) {
        const task = e.target.value;
        this.prevTask(task);
    }

    handleAddTask(taskName) {
        if (taskName !== ''){
            const task = {
                key: new Date(),
                name: taskName,
                done: false
            }
            let allTasks = this.state.allTasks;
            allTasks.push(task);

            let data = JSON.stringify(allTasks);
            this.updateCookie(tasksCookie, cookieKey, data);

            allTasks = tasksCookie.get('allTasks');

            this.setState({allTasks});

            this.setState({task: ''});
        }
    }
    handleEnter(e){
        if (e.key === 'Enter') {this.handleAddTask(e.target.value)}
    }

    updateTask(key, action) {
        switch (action) {
            case 'DELETE':

                if (this.state.allTasks.filter((task) => task.key === key).length > 0) {

                    let allTasks = this.state.allTasks;
                    allTasks.splice(key, 1);
                    this.setState({allTasks});

                    let data = JSON.stringify(this.state.allTasks);
                    this.updateCookie(tasksCookie, cookieKey, data);

                    // console.log(tasksCookie.get('allTasks'));
                } else {
                    console.log("Item not found");
                }

                break;
            case 'DONE':

                if (this.state.allTasks.filter((task) => task.key === key).length > 0) {

                    let allTasks = this.state.allTasks;
                    allTasks.filter(function(task) {
                        if (task.key === key) {
                            return task.done = true;
                        }
                        return '';
                    });

                    let data = JSON.stringify(allTasks);
                    this.updateCookie(tasksCookie, cookieKey, data);

                    allTasks = tasksCookie.get('allTasks');

                    this.setState({allTasks});

                } else {
                    console.log("Item not found");
                }

                break;
            case 'UNDO':

                if (this.state.allTasks.filter((task) => task.key === key).length > 0) {

                    let allTasks = this.state.allTasks;
                    allTasks.filter(function(task) {
                        if (task.key === key) {
                            return task.done = false;
                        }
                        return '';
                    });

                    let data = JSON.stringify(allTasks);
                    this.updateCookie(tasksCookie, cookieKey, data);

                    allTasks = tasksCookie.get('allTasks');

                    this.setState({allTasks});

                } else {
                    console.log("Item not found");
                }

                break;
            case 'EDIT':
                console.log(action, key);
                break;
            case 'DELETE_ALL':
                tasksCookie.set(cookieKey, [], { path: '/' });
                this.setState({allTasks: []});
                break;
            case 'DONE_ALL':

                let allTasks = this.state.allTasks;
                allTasks.map((task) => task.done = true);

                let data = JSON.stringify(allTasks);
                this.updateCookie(tasksCookie, cookieKey, data);

                allTasks = tasksCookie.get('allTasks');

                this.setState({allTasks});

                break;
            default:

        }
    }

    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col s11 m6 l5 add-task">
                            <h4>Add a task</h4>
                            <div className="input-field col s12">
                                <label htmlFor="task">My Task</label>
                                <input type="text" id="task" title="task"
                                       value={this.state.task}
                                       onChange={this.handlePrev.bind(this)}
                                       onKeyPress={this.handleEnter.bind(this)}
                                    />
                            </div>
                            <div className="col s12">
                                <button className="btn waves-effect waves-dark teal lighten-2" onClick={this.handleAddTask.bind(this, this.state.task)}>
                                    Add Task<i className="material-icons right">add</i>
                                </button>
                            </div>
                            <h6 className="col s12">Task Preview</h6>
                            <TaskPreview prevTask={this.prevTask.bind(this)} task={this.state.task} />
                        </div>
                        <div className="col s11 m6 offset-l1 l6 all-tasks">
                            <h4>
                                All tasks
                                <i className="material-icons right small act-btn tooltipped" data-position="top" data-delay="20" data-tooltip="Delete All Tasks" onClick={this.delete_all.bind(this)} >delete_sweep</i>
                                <i className="material-icons right small act-btn tooltipped" data-position="top" data-delay="20" data-tooltip="All Tasks Done" onClick={this.done_all.bind(this)} >done_all</i>
                            </h4>
                            <div className="task-container">
                                {this.state.allTasks &&
                                    this.state.allTasks.map(task =>
                                    !task.done && <Task task={task} key={task.key} updateTask={this.updateTask.bind(this)} />
                                )}
                            </div>
                            <div className="task-done-container">
                                <h5>Done tasks</h5>
                                {this.state.allTasks &&
                                    this.state.allTasks.map(task =>
                                    task.done && <TaskDone task={task} key={task.key} updateTask={this.updateTask.bind(this)} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
