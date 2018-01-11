import React, { Component } from 'react';
import '../LineApp.css';

class Task extends Component {

    delete() {
        this.props.updateTask(this.props.task.key, 'DELETE');
    }

    done() {
        this.props.updateTask(this.props.task.key, 'DONE');
    }

    edit() {
        this.props.updateTask(this.props.task.key, 'EDIT');
    }

    render() {
        return (
            <div className="card-panel task">
                <span>{this.props.task.name}</span>
                <div className="right">
                    <i className="material-icons right act-btn tooltipped" data-position="top" data-delay="20" data-tooltip="Delete Task" onClick={this.delete.bind(this)} >delete</i>
                    <i className="material-icons right act-btn tooltipped" data-position="top" data-delay="20" data-tooltip="Task Done" onClick={this.done.bind(this)} >done</i>
                    <i className="material-icons right act-btn tooltipped" data-position="top" data-delay="20" data-tooltip="Edit Task" onClick={this.edit.bind(this)} >edit</i>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default Task;
