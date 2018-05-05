// components/SearchBar/SearchBar.js

import React from 'react'
import { connect } from 'react-redux'

import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui-icons/Search'

import { set_filtered_boards } from '../../actions/board.js'

import './SearchBar.scss'

class SearchBar extends React.Component {

  handle_change = e => {
    const { dispatch, boards } = this.props
    const query = e.target.value
    if (query.length > 0) {
      const filtered = boards.filter(board => {
        const name = board.name
        const substr_index = query.length
        if (substr_index > name.length) { return false }
        const substr = name.substring(0, substr_index)
        return query === substr
      })
      dispatch(set_filtered_boards(filtered))
    } else {
      dispatch(set_filtered_boards(boards))
    }
  }

  render() {

    return (
      <TextField
        className="nav-search-bar"
        onChange={this.handle_change}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    )

  }

}

const map_state_to_props = state => {
  return { boards: state.boards.all }
}

export default connect(map_state_to_props)(SearchBar)
