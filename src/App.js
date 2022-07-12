import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import WelcomeMessage from './components/WelcomeMessage'


const heros = ["Superman", "Batman", "Cat Woman", "Flash"]

class App extends Component {
  render() {
    return <section>
      Hello, Welcome to React
      <WelcomeMessage username="Superman"></WelcomeMessage>
      <WelcomeMessage username="Batman"></WelcomeMessage>
      <WelcomeMessage username="Cat Woman"></WelcomeMessage>
      <WelcomeMessage username="Flash"></WelcomeMessage>
    </section>
  }
}

export default App
