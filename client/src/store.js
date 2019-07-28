import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './redux/reducers/Reducers'
import state from './State'

const initialState = state;

const store = createStore(
  rootReducers,
  state,
  composeWithDevTools(applyMiddleware(thunk))
)

   export default store