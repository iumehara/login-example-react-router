import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import auth from './auth'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: auth.loggedIn()
    }
    this.updateAuth = this.updateAuth.bind(this)
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn
    })
  }

  componentWillMount() {
    auth.onChange = this.updateAuth
  }

  loginLogoutLink() {
    if (this.state.loggedIn) {
      return <Link to='/logout'>Log out</Link>
    } else {
      return <Link to='/login'>Sign in</Link>
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.loginLogoutLink()}</li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        {this.props.children }
      </div>
    )
  }
}

export default App
