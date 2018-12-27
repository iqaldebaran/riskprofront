import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
// import {createLogger} from 'redux-logger';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
    
  )
);


export default store;
