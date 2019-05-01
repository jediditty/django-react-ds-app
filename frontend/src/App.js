import React, { Component } from 'react'
import NavBar from './components/navbar.js'
import SimpleTable from './components/table'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SimpleTable />
      </div>
    )
  }
}
export default App