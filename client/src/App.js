import React, { Fragment, useEffect } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import store from './store'
import Navbar from './containers/NavBarContainer'
import Landing from './containers/LandingContainer'
import RegisterContainer from './containers/RegisterContainer'
import Login from './containers/LoginContainer'
import Dashboard from './containers/DashboardContainer'
import settingAuthToken from './util/setAuthToken'
import CreateProfile from './containers/CreateProfileContainer'
import EditProfile from './containers/EditProfileContainer'
import AddExperience from './containers/AddExperienceContainer'
import AddEducation from './containers/AddEducationContainer'
import Profiles from './containers/profiles/ProfilesContainer'
import Profile from './containers/profile/ProfileContainer'
import Posts from './containers/posts/PostsContainer'
import Music from './components/music/Music'
import Map from './containers/RunsContainer'
import PrivateRoute from './components/routing/PrivateRoute'
import Alert from './components/layout/Alert'
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
  <Fragment className="container-fluid" >
  <Navbar/>
  <Route exact path='/' component={Landing}/>
  <Alert />
    <Switch>
      <Route exact path='/register' component={RegisterContainer}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/profiles' component={Profiles}/>
      <Route exact path='/profile/:id' component={Profile}/>
      <PrivateRoute exact path='/dashboard' component={Dashboard}/>
      <PrivateRoute exact path='/create-profile' component={CreateProfile}/>
      <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
      <PrivateRoute exact path='/add-experience' component={AddExperience}/>
      <PrivateRoute exact path='/add-education' component={AddEducation}/>
      <PrivateRoute exact path='/posts' component={Posts}/>
      <PrivateRoute exact path='/music' component={Music}/>
      <PrivateRoute exact path='/map' component={Map}/>
    </Switch>
  </Fragment>
  </BrowserRouter>
  )
}
export default App;
