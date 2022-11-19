import React from 'react'

import PropTypes from 'prop-types'

import Main from './main'
import './body.css'

const Body = (props) => {
  return (
    <div className="body-body">
      <Main rootClassName="main-root-class-name"></Main>
      <img
        alt={props.ladyimg_alt}
        src={props.ladyimg_src}
        className="body-ladyimg"
      />
      <div className="body-spline"></div>
    </div>
  )
}

Body.defaultProps = {
  ladyimg_src: '/playground_assets/lady-900h.png',
  ladyimg_alt: 'image',
}

Body.propTypes = {
  ladyimg_src: PropTypes.string,
  ladyimg_alt: PropTypes.string,
}

export default Body
