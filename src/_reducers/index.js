import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { notification } from './notification.reducer';
import { dashboard } from './dashboard.reducer';
import { userConstants } from '_constants';



const appReducer = combineReducers({
  authentication,
  notification,
  dashboard
})

const rootReducer = (state, action) => {
  if (action.type === userConstants.LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;