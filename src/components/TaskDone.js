import React from 'react';
import '../LineApp.css';

import Task from './Task';

class TaskDone extends Task {

    undo() {
        this.props.updateTask(this.props.task.key, 'UNDO');
    }

    render() {
        return (
            <div className="card-panel task done">
                <span>{this.props.task.name}</span>
                <div className="right">
                    <i className="material-icons right act-btn tooltipped" data-position="top" data-delay="20" data-tooltip="Delete Task" onClick={this.delete.bind(this)}>delete</i>
                    <i className="material-icons right act-btn tooltipped" data-position="top" data-delay="20" data-tooltip="Undo Task" onClick={this.undo.bind(this)} >undo</i>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default TaskDone;
