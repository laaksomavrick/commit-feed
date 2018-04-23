// components/TaskListItem/TaskListItem.js

import React from 'react'
import PropTypes from 'prop-types'

import { ListItem, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'

import './TaskListItem.css'

const TaskListItem = ({ task }) => (
  <div className="task-list-item">
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

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired
}

export default TaskListItem
