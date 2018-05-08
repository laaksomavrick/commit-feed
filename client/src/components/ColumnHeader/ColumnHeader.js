// ColumnHeader/ColumnHeader.js

import React from 'react'

import Typography from 'material-ui/Typography'

import './ColumnHeader.scss'

class ColumnHeader extends React.Component {

  render() {

    const { name } = this.props

    return (

      <div className="column-header">
        <Typography className="column-header__text" variant="headline">
          {name}
        </Typography>
      </div>

    )

  }

}

export default ColumnHeader
