// components/TaskListHeader/TaskListHeader.js

import React from 'react'

import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'

import BackRoute from '../Route/BackRoute.js'

import './TaskListHeader.scss'

//back button, board name

const TaskListHeader = ({ board }) => (
  <div className="task-list-header">
    <BackRoute className="task-list-header__back">
      <IconButton color="inherit">
        <ArrowBackIcon />
      </IconButton>
    </BackRoute>
    <Typography className="task-list-header__name" variant="title">
      {board.name}
    </Typography>
  </div>
)

export default TaskListHeader
