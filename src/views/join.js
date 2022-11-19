import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './join.css'

const Join = (props) => {
  return (
    <div className="join-container">
      <Helmet>
        <title>join - Prudent Lumpy Monkey</title>
        <meta property="og:title" content="join - Prudent Lumpy Monkey" />
      </Helmet>
      <div className="join-container1">
        <div className="join-container2">
          <span className="join-text">Login</span>
          <span className="join-text1">Password</span>
          <span className="join-text2">Name</span>
          <span className="join-text3">E-mail</span>
          <input
            type="text"
            placeholder="placeholder"
            className="join-textinput input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="join-textinput1 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="join-textinput2 input"
          />
        </div>
        <span className="join-text4">
          <span className="join-text5">Join the </span>
          <span className="join-text6">fun.</span>
        </span>
      </div>
      <Link to="/" className="join-navlink">
        <svg viewBox="0 0 1024 1024" className="join-icon">
          <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
        </svg>
      </Link>
    </div>
  )
}

export default Join
