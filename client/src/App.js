import React, { Fragment } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import RegisterContainer from './containers/RegisterContainer'
import Login from './components/auth/Login'
import './App.css';

const App = () => 
  <BrowserRouter>
  <Fragment >
  <Navbar/>
  <Route exact path='/' component={Landing}/>
  <section className="container">
    <Switch>
      <Route exact path='/register' component={RegisterContainer}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  </section>
  </Fragment>
  </BrowserRouter>

export default App;
