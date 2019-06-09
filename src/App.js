// create your App component here

import React, { Component } from 'react'
export default class App extends Component {

  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  render() {
    return(
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.people
      })
    })
  }
}


// This lab is missing the App component that index.js is looking for. To pass the tests in this lab:
//
// Create an App class component from scratch
// Write a componentDidMount method. Inside the method, send a fetch request to http://api.open-notify.org/astros.json, a free API that returns a list of people currently in space.

// Initial answer:
