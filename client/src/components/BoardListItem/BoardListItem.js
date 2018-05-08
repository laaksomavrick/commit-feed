// components/BoardListItem/BoardListItem.js

import React from 'react'
import PropTypes from 'prop-types'

import Divider from 'material-ui/Divider'
import { ListItem, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'

import './BoardListItem.scss'

//TODO: task list only
const BoardListDivider = ({ index }) => {
  if (index !== 0) {
    return <Divider inset />
  }
  return null
} 

const BoardListItem = ({ task, index }) => (
  <div className="board-list-item">
    <ListItem
      key={task.id}
      button
    >
      <Checkbox
        tabIndex={-1}
      />
      <ListItemText
        primary={task.name}
      />
    </ListItem>
  </div>
)

BoardListItem.propTypes = {
  task: PropTypes.object.isRequired
}

export default BoardListItem
