import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
const loggerMiddleware = createLogger();

const middleware = process.env.NODE_ENV === 'development' ? [thunkMiddleware, loggerMiddleware] : [thunkMiddleware];

let store;

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    rootReducer,
   // initalState,
    compose(
      applyMiddleware(...middleware, ),
      ReactReduxDevTools
    )
  );
} else {
  store = createStore(
    rootReducer,
  //  initalState,
    compose(applyMiddleware(...middleware))
  );
}

export {store};
