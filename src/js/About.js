import React from 'react'
import { render } from 'react-dom'
import auth from './auth'

class About extends React.Component {
  render() {
    let specialContent = () => {
      if (auth.loggedIn()) {
        return <div>Special info only available to logged in members!</div>
      }
    }

    return (
      <div>
        <h1>About</h1>
        {specialContent()}
      </div>
    )
  }
}

export default About
