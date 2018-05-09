import rootReducer from '../reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default (initialState) => {
  return createStore(rootReducer, initialState, composedEnhancers);
};
