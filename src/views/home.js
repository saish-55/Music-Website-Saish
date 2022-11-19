import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Body from '../components/body'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Prudent Lumpy Monkey</title>
        <meta property="og:title" content="Prudent Lumpy Monkey" />
      </Helmet>
      <Navbar></Navbar>
      <Body></Body>
    </div>
  )
}

export default Home
