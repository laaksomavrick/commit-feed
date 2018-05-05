// components/TaskList/TaskList.js

import React from 'react'
import PropTypes from 'prop-types'

import List from 'material-ui/List'

import TaskListItem from '../TaskListItem/TaskListItem.js'

import './TaskList.scss'

const TaskList = ({ tasks }) => (
  <div className="task-list">
    <List>
      {
        tasks.map((task, index) => 
          <TaskListItem task={task} key={task.id} index={index} />
        )
      }
    </List>
  </div>
)

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default TaskList

