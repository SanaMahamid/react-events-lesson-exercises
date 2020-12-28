import React, { Component } from 'react';

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.task.text)
  }

  render() {
    let task = this.props.task
    return (
      <div>
        <span>{task.text} - </span>
        <button onClick={this.complete}>Complete</button>
      </div>
    )
  }
}

export default Task;
