import React from 'react';
import HomePage from './pages/home/HomePage';
import VizPage from './pages/viz/VizPage';
import HttpsRedirect from 'react-https-redirect'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export default function App() {

  return (
    <Router>
    <Switch>
    <Route path="/viz" render={() => <VizPage/>} />
    <Route path="/" render={() => <HomePage/>}/>
    </Switch>
  </Router>);
}