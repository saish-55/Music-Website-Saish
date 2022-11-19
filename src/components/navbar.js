import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar-navbar">
      <div className="navbar-container">
        <Link to="/discover" className="navbar-discover button">
          {props.discover}
        </Link>
        <Link to="/join" autoFocus className="navbar-join button">
          {props.join}
        </Link>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  discover: 'Discover\n',
  join: 'Join',
}

Navbar.propTypes = {
  discover: PropTypes.string,
  join: PropTypes.string,
}

export default Navbar
