// BoardContainer.js

import React from 'react'
import { connect } from 'react-redux'

import { Switch, Route, Redirect } from 'react-router-dom'

import Tasks from '../Tasks/Tasks.js'
import PropRoute from '../Route/PropRoute.js'

import './BoardContainer.scss'

class BoardContainer extends React.Component {

  render() {

    const { match, tasks, board } = this.props

    return (
      <div className="board-container">
        <Switch>
          <Route path={`${match.url}/kanban`} component={() => (<h1>kanban</h1>)} />
          <PropRoute path={`${match.url}/list`} component={Tasks} board={board} tasks={tasks} />
          <Route component={() => <Redirect to={`${match.url}/kanban`} /> } />
        </Switch>
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

export default connect(map_state_to_props)(BoardContainer)
