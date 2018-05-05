// components/Tasks/Tasks.js

import React from 'react'

import Paper from 'material-ui/Paper'

import TaskList from '../TaskList/TaskList.js'
import TaskListHeader from '../TaskListHeader/TaskListHeader.js'

import './Tasks.scss'

class Tasks extends React.Component {

  render() {

    const { tasks, board } = this.props

    //TODO a task section header (will correspond to columns)

    return (
      <div className="tasks">
        <Paper>
          <TaskListHeader board={board} />
          <TaskList tasks={tasks} />
        </Paper>
      </div>
    )

  }

}

export default Tasks
