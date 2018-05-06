// components/BoardHeader/TaskListHeader.js

import React from 'react'

import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'

import BackRoute from '../Route/BackRoute.js'

import './BoardHeader.scss'

const BoardHeader = ({ board }) => (
  <div className="board-header">
    <BackRoute className="board-header__back">
      <IconButton color="inherit">
        <ArrowBackIcon />
      </IconButton>
    </BackRoute>
    <Typography className="board-header__name" variant="title">
      {board.name}
    </Typography>
  </div>
)

export default BoardHeader
