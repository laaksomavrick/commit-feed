// components/BoardList/BoardList.js

import React from 'react'
import PropTypes from 'prop-types'

import List from 'material-ui/List'

import BoardListItem from '../BoardListItem/BoardListItem.js'

import './BoardList.scss'

const BoardList = ({ tasks }) => (
  <div className="board-list">
    <List>
      {
        tasks.map((task, index) => 
          <BoardListItem task={task} key={task.id} index={index} />
        )
      }
    </List>
  </div>
)

BoardList.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default BoardList

