import { userConstants } from '../_constants';


export function authentication(state = {}, action) {

  //let user = JSON.parse(commonUtils.decryptString(localStorage.getItem('cu')));
  //const initialState = user ? { loggedIn: true, user, validKey: false, changePasswordSuccess: false } : {};
  //state = initialState;
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.userResponse.employee,
        authToken: action.userResponse.authToken,
        authRefreshToken: action.userResponse.authRefreshToken
      };
    case userConstants.LOGIN_FAILURE:
      return {
        error: true,
        errorMessage: action.error
      };
    case userConstants.LOGOUT:
      return {};
    case userConstants.INITATE_ACCOUNT_ACTIVATION_SUCCESS:
      return {
        initiateActivationRequestSuccess: action.generalResponse.payload.success
      }
    case userConstants.INITATE_ACCOUNT_ACTIVATION_REQUEST:
      return {
        initiateActivationRequestSuccess: false
      }
    case userConstants.INITATE_ACCOUNT_ACTIVATION_FAILURE:
      return {
        error: true,
        initiateActivationRequestSuccess: false
      }
    case userConstants.VALIDATE_ACCOUNT_ACTIVATION_SUCCESS:
      return {
        validKey: action.generalResponse.payload.success
      }
    case userConstants.VALIDATE_ACCOUNT_ACTIVATION_REQUEST:
      return {
        validKey: false
      }
    case userConstants.VALIDATE_ACCOUNT_ACTIVATION_FAILURE:
      return {
        error: true
      }
    case userConstants.CHANGE_PASSWORD_REQUEST:
      return {
        changePasswordSuccess: false
      }
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      return {
        changePasswordSuccess: action.generalResponse.payload.success
      }

    case userConstants.CHANGE_PASSWORD_FAILURE:
      return {
        error: true
      }
    case userConstants.UPDATE_PASSWORD_REQUEST:
      return {
        updatePasswordSuccess: false,
        updatePasswordError: false
      }
    case userConstants.UPDATE_PASSWORD_SUCCESS:
      return {
        updatePasswordSuccess: action.generalResponse.payload.success,
        updatePasswordError: false
      }

    case userConstants.UPDATE_PASSWORD_FAILURE:
      return {
        updatePasswordSuccess: false,
        updatePasswordError: true
      }
    default:
      return state
  }
}