import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import { ApolloProvider } from "react-apollo"
import client from "./client"

import GlobalStyle from "./globalStyles"

import Home from "./Home"
import Details from "./Details"

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router>
        <Route exact path={"/"} component={Home} />
        <Route path={"/details/:movieId"} component={Details} />
      </Router>
    </ApolloProvider>
  )
}

export default App
