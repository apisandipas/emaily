import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'

const Dashboard = () => <div><h2>Dashboard</h2></div>
const SurveyNew = () => <div><h2>SurveyNew</h2></div>
const Landing = () => <div><h2>Landing</h2></div>

class App extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
