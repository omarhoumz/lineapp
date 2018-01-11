import React, { Component } from 'react';
import '../LineApp.css';

class Task extends Component {

    delete() {
        console.log("delete");
    }

    undo() {
        console.log("undo");
    }

    done() {
        console.log("done");
    }

    edit() {
        console.log("edit");
    }

    render() {
        return (
            <div className="card-panel task">
                <span>Do laundry</span>
                <div className="right">
                    <i className="material-icons right act-btn" onClick={this.delete} >delete</i>
                    <i className="material-icons right act-btn" onClick={this.done} >done</i>
                    <i className="material-icons right act-btn" onClick={this.edit} >edit</i>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default Task;
