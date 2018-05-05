// components/Tasks/Tasks.js

import React from 'react'
import { connect } from 'react-redux'

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

const map_state_to_props = (state, props) => {

  const board_id = parseInt(props.match.params.id)
  const tasks = state.tasks.filtered.filter(task => task.board_id === board_id)
  const board = state.boards.all.find(board => board.id === board_id)

  return {
    tasks,
    board
  }

}

export default connect(map_state_to_props)(Tasks)
