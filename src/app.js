import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import SignUp from './components/signup';
import SignIn from './components/signIn';



class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/sign-up" component={SignUp}/>
          <Route path="/sign-in" component={SignIn}/>
        </Switch>
        </BrowserRouter>
    )
  }
}

export default App;