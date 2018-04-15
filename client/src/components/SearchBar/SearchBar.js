// components/SearchBar/SearchBar.js

import React from 'react'
import { connect } from 'react-redux'

import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui-icons/Search'

import './SearchBar.css'

class SearchBar extends React.Component {

  render() {

    return (
      <TextField
        className="nav-search-bar"
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

export default SearchBar
