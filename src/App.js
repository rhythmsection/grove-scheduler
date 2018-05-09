import React, { Component } from 'react'
import './App.css'
import TasksContainer from './components/tasksContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
       <TasksContainer />
      </div>
    )
  }
}

export default App
