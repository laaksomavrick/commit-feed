// Column/Column.js

import React from 'react'

import ColumnHeader from '../ColumnHeader/ColumnHeader.js'

import './Column.scss'

class Column extends React.Component {

  render() {

    const { column, tasks } = this.props

    return (

      <div className="column">
        <ColumnHeader name={column.name} />
      </div>

    )

  }

}

export default Column
