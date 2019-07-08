import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './redux/reducers/Reducers'

const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

   export default store