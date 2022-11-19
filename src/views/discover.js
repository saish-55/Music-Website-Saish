import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './discover.css'

const Discover = (props) => {
  return (
    <div className="discover-container">
      <Helmet>
        <title>Discover - Prudent Lumpy Monkey</title>
        <meta property="og:title" content="Discover - Prudent Lumpy Monkey" />
      </Helmet>
      <div className="discover-container1">
        <div className="discover-container2">
          <span className="discover-text">Discover new music</span>
          <div className="discover-container3">
            <div className="discover-container4">
              <svg viewBox="0 0 1024 1024" className="discover-icon">
                <path d="M512 133.035l331.264 165.632-331.264 165.632-331.264-165.632zM492.928 47.189l-426.667 213.333c-21.077 10.539-29.611 36.139-19.072 57.216 4.309 8.661 11.136 15.189 19.072 19.072l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259-4.309-8.619-11.179-15.147-19.072-19.072l-426.667-213.333c-12.459-6.229-26.453-5.803-38.144 0zM66.261 763.477l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259zM66.261 550.144l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259z"></path>
              </svg>
            </div>
            <div className="discover-container5">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="discover-icon2"
              >
                <path d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
            </div>
            <div className="discover-container6">
              <svg viewBox="0 0 1024 1024" className="discover-icon4">
                <path d="M738 470h72q0 108-75 189t-181 97v140h-84v-140q-106-16-181-97t-75-189h72q0 94 67 155t159 61 159-61 67-155zM512 598q-52 0-90-38t-38-90v-256q0-52 38-90t90-38 90 38 38 90v256q0 52-38 90t-90 38z"></path>
              </svg>
            </div>
          </div>
          <span className="discover-text1">
            <span>
              By joining you can benefit by listening to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>the latest albums released</span>
          </span>
        </div>
        <div className="discover-container7">
          <img
            alt="image"
            src="/playground_assets/1-200w.jpg"
            className="discover-image"
          />
          <img
            alt="image"
            src="/playground_assets/2-200h.jpg"
            className="discover-image1"
          />
          <img
            alt="image"
            src="/playground_assets/3-200w.jpg"
            className="discover-image2"
          />
          <img
            alt="image"
            src="/playground_assets/4-200h.jpg"
            className="discover-image3"
          />
        </div>
      </div>
      <Link to="/" className="discover-navlink">
        <svg viewBox="0 0 1024 1024" className="discover-icon6">
          <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
        </svg>
      </Link>
    </div>
  )
}

export default Discover
