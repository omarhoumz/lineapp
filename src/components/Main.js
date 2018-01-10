import React, { Component } from 'react';
import '../LineApp.css';

class Main extends Component {

    clik(p) {
        alert('Blah blas ' + p);
    }

    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col s5 add-task">
                            <h4>Add a task</h4>
                            <div className="input-field col s12">
                                <label htmlFor="task">My Task</label>
                                <input type="text" id="task" title="task" />
                            </div>
                        </div>
                        <div className="col offset-s1 s6 all-tasks">
                            <h4>
                                All tasks
                                <i className="material-icons right small" onClick={this.clik.bind("haha")} >delete_sweep</i>
                                <i className="material-icons right small" onClick={this.clik} >done_all</i>
                            </h4>
                            <div className="task-container">
                                <div className="card-panel">
                                    <span>Do laundry</span>
                                    <i className="material-icons right" onClick={this.clik} >delete</i>
                                    <i className="material-icons right" onClick={this.clik} >undo</i>
                                </div>
                                <div className="card-panel">
                                    <span>Go shopping</span>
                                    <i className="material-icons right" onClick={this.clik} >delete</i>
                                    <i className="material-icons right" onClick={this.clik} >done</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
