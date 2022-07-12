import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import WelcomeMessage from './components/WelcomeMessage'

class App extends Component {
  render() {
    return <section>
      Hello, Welcome to React
      <WelcomeMessage username="Superman"></WelcomeMessage>
      <WelcomeMessage username="Batman"></WelcomeMessage>
      <WelcomeMessage username="Cat Woman"></WelcomeMessage>
    </section>
  }
}

export default App
