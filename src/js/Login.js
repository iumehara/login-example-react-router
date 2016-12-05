import React from 'react'
import { render } from 'react-dom'
import { withRouter } from 'react-router'
import auth from './auth'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    auth.login(email, pass, (loggedIn) => {
      if (loggedIn) {
        this.props.router.replace('/')
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
        <label><input ref="pass" placeholder="password" /></label><br />
        <button type="submit">login</button>
      </form>
    )
  }
}

export default withRouter(Login)
