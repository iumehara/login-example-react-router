import React from 'react'
import { render } from 'react-dom'
import auth from './auth'

class Dashboard extends React.Component {
  render() {
    let topSecretContent = () => {
      if (auth.loggedIn()) {
        return <div>Top secret data only available to logged in members!</div>
      }
    }

    return(
      <div>
        <h1>Dashboard</h1>
        {topSecretContent()}
      </div>
    )
  }
}

export default Dashboard
