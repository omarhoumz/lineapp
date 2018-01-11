import React from 'react';
import '../LineApp.css';

import Task from './Task';

class TaskDone extends Task {
    render() {
        return (
            <div className="card-panel task done">
                <span>Go shopping</span>
                <div className="right">
                    <i className="material-icons right act-btn" onClick={this.delete} >delete</i>
                    <i className="material-icons right act-btn" onClick={this.undo} >undo</i>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default TaskDone;
