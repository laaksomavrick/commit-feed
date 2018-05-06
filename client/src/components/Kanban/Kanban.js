// Kanban/Kanban.js

import React from 'react'

import Column from '../Column/Column.js'

import './Kanban.scss'

class Kanban extends React.Component {

  render () {

    const { tasks, board, columns } = this.props //columns

    return (
      <div className="kanban">
        {columns.map(column => {
          const column_tasks = tasks.filter(t => t.column_id === column.id)
          return (
            <Column key={column.id} column={column} tasks={column_tasks} />
          )
        })}
      </div>
    )

  }

}

export default Kanban
