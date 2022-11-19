import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Discover from './views/discover'
import Join from './views/join'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Discover} exact path="/discover" />
        <Route component={Join} exact path="/join" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
