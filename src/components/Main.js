import React, { Component } from 'react';
import '../LineApp.css';

import Task from './Task';
import TaskDone from './TaskDone';
import TaskPreview from './TaskPreview';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: "My Task"
        }
    }

    delete_all() {
        console.log("delete_all");
    }

    done_all() {
        console.log("done_all");
    }

    prevTask(task) {
        this.setState({task});
    }

    handlePrev(e) {
        const task = e.target.value;
        this.prevTask(task);
    }

    handleAddTask(task) {
        console.log(task);
    }
    handleEnter(e){
        if (e.key === 'Enter') {this.handleAddTask(e.target.value)}
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
                                       value={this.props.task}
                                       onChange={this.handlePrev.bind(this)}
                                       onKeyPress={this.handleEnter.bind(this)}
                                    />
                            </div>
                            <div className="col s12">
                                <button className="btn" onClick={this.handleAddTask.bind(this, this.state.task)}>Add Task</button>
                            </div>
                            <TaskPreview prevTask={this.prevTask.bind(this)} task={this.state.task} />
                        </div>
                        <div className="col s11 m6 offset-l1 l6 all-tasks">
                            <h4>
                                All tasks
                                <i className="material-icons right small act-btn" onClick={this.delete_all} >delete_sweep</i>
                                <i className="material-icons right small act-btn" onClick={this.done_all} >done_all</i>
                            </h4>
                            <div className="task-container">
                                <Task />
                            </div>
                            <div className="task-done-container">
                                <h5>Done tasks</h5>
                                <TaskDone />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
