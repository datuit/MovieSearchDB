import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import { Footer } from './components/layout'
import { Header } from './components/layout'
import Home from './containers/Home'

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </Container>
  )
}

export default App
