import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import IndexPageContainer from './components/IndexPageContainer'

export const App = props => {
  return (
    <Router>
      <Route exact path="/" component={IndexPageContainer} />
    </Router>
  )
}

export default App
