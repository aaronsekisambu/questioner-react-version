import React, { Component} from 'react';
import { BrowserRouter as Router,  Route, Link, Switch} from 'react-router-dom';
import LandingPage from './landingPage/landingPage';
import Authentication from './authentication/authentication';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={Authentication} />
        </Switch>
      </Router>
    )
  }
}
export default App;
