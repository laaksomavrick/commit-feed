// ColumnHeader/ColumnHeader.js

import React from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import './ColumnHeader.scss'

class ColumnHeader extends React.Component {

  render() {

    const { name } = this.props

    return (

      <div className="column-header">
        <Paper>
          <Typography className="column-header__text" variant="subheading">
            {name}
          </Typography>
        </Paper>
      </div>

    )

  }

}

export default ColumnHeader
