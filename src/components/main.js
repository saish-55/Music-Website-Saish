import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './main.css'

const Main = (props) => {
  return (
    <div className={`main-main ${props.rootClassName} `}>
      <Link to="/join" className="main-joinnow button">
        {props.joinnow}
      </Link>
      <span className="main-text">{props.text}</span>
      <span className="main-text1">
        <span className="">
          Stream over 20 Thousand songs
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="">with one click</span>
      </span>
    </div>
  )
}

Main.defaultProps = {
  joinnow: 'Join Now',
  text: 'Feel The Music',
  rootClassName: '',
}

Main.propTypes = {
  joinnow: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Main
