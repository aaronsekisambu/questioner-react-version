import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter as Router,  Route, Link, Switch} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/dashboard.scss';
import LandingPage from './landingPage/landingPage';
import Authentication from './authentication/authentication';
import Dashboard from './dashBoard/dashboard';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={Authentication} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}
export default App;
