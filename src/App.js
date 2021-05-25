import React from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import UserProfile from './components/Profile'
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
