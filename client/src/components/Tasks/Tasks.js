// components/Tasks/Tasks.js

import React from 'react'
import { connect } from 'react-redux'

import TaskList from '../TaskList/TaskList.js'

import './Tasks.css'

class Tasks extends React.Component {

  render() {

    const { tasks } = this.props

    // a settings bar (board name, kanban/list, back button, etc..)
    //TODO a task section header (will correspond to columns)
    //a list of tasks

    return (
      <div className="tasks">
        <TaskList tasks={tasks} />
      </div>
    )

  }

}

const map_state_to_props = (state, props) => {

  const board_id = parseInt(props.match.params.id)
  const tasks = state.tasks.filtered.filter(task => task.board_id === board_id)

  return {
    tasks
  }

}

export default connect(map_state_to_props)(Tasks)
