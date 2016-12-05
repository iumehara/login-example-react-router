import React from 'react'
import { render } from 'react-dom'
import auth from './auth'

class Logout extends React.Component {
  componentDidMount() {
    auth.logout()
  }

  render() {
    return <p>You are now logged out</p>
  }
}

export default Logout
