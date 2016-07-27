import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createCard } from 'actions/actionSample'

export default class App extends Component {
  static get displayName () {
    return 'App'
  }

  constructor (props) {
    super(props)

    this.state = {}
    this.doSomething = this.doSomething.bind(this)
  }

  componentWillMount () {
    console.info('CWM')
  }

  componentDidMount () {
    console.info('CDM')
  }

  componentWillReceiveProps () {
    console.info('CWRP')
  }

  componentWillUpdate () {
    console.info('CWU')
  }

  componentDidUpdate () {
    console.info('CDU')
  }

  componentWillUnmount () {
    console.info('CWUM')
  }

  doSomething () {
    console.info('do something')
  }

  render () {
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    createCard
  }, dispatch)
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
