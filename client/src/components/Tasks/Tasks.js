// components/Tasks/Tasks.js

import React from 'react'

import TaskList from '../TaskList/TaskList.js'

import './Tasks.scss'

class Tasks extends React.Component {

  render() {

    const { tasks, board } = this.props

    return (
      <div className="tasks">
        <TaskList tasks={tasks} />
      </div>
    )

  }

}

export default Tasks
