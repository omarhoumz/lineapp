import React from 'react';
import '../LineApp.css';

import Task from './Task';

class TaskPreview extends Task {
    render() {
        return (
            <div className="card-panel task preview col s12">
                <span>{this.props.task}</span>
                <div className="right">
                    <i className="material-icons right act-btn">delete</i>
                    <i className="material-icons right act-btn">done</i>
                    <i className="material-icons right act-btn">edit</i>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default TaskPreview;
