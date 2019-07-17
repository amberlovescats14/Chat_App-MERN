import React, { Fragment, useEffect } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import store from './store'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import RegisterContainer from './containers/RegisterContainer'
import Login from './containers/LoginContainer'
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
    </Switch>
  </section>
  </Fragment>
  </BrowserRouter>
  )
}
export default App;
