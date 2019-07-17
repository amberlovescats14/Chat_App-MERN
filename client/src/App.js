import React, { Fragment, useEffect } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import store from './store'
import Navbar from './containers/NavBarContainer'
import Landing from './containers/LandingContainer'
import RegisterContainer from './containers/RegisterContainer'
import Login from './containers/LoginContainer'
import Dashboard from './containers/DashboardContainer'
import PrivateRoute from './components/routing/PrivateRoute'
import Alert from './components/layout/Alert'
import settingAuthToken from './util/setAuthToken'
import { loadUser } from './redux/actions/Actions'
import './App.css';


if(localStorage.token) {
  settingAuthToken(localStorage.token)
}


const App = () => {
  //useEffect is like a life cycle hook
  useEffect(()=> {
    store.dispatch(loadUser())
  }, [])
  // by giving this square brackets at the end it will only run once like a component did mount
  return (
  <BrowserRouter>
  <Fragment >
  <Navbar/>
  <Route exact path='/' component={Landing}/>
  <section className="container">
  <Alert />
    <Switch>
      <Route exact path='/register' component={RegisterContainer}/>
      <Route exact path='/login' component={Login}/>
      <PrivateRoute exact path='/dashboard' component={Dashboard}/>
    </Switch>
  </section>
  </Fragment>
  </BrowserRouter>
  )
}
export default App;
