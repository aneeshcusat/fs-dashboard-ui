import { history } from '_helpers';
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { notificationActions } from './';

export const userActions = {
    login,
    logout,
    initiateAccountActivation,
    validateAccountActivation,
    changePassword,
    updatePassword,
    authRefresh
};

function login(email, password) {
    console.log("login action");
    return async (dispatch) => {
        dispatch(request({ email }));
        userService.login(email, password)
            .then(
                userResponse => {

                    // history.push('/');
                    if (userResponse && userResponse.payload) {
                        dispatch(success(userResponse.payload));
                        window.location.reload();
                    } else if (userResponse && userResponse.error && userResponse.error.length > 0) {
                        dispatch(failure(userResponse.error[0].message));
                    }
                },
                error => {
                    if (error && error.error && error.error.length > 0) {
                        dispatch(failure(error.error[0].message));
                    } else {
                        dispatch(failure(getErrorMessage(error)));
                        dispatch(notificationActions.error(error.toString()));
                    }
                }
            );
    };

    function request(request) { return { type: userConstants.LOGIN_REQUEST, request } }
    function success(userResponse) { return { type: userConstants.LOGIN_SUCCESS, userResponse } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function authRefresh() {
    return async (dispatch) => {
        userService.authRefresh()
            .then(
                userResponse => {
                    if (userResponse && userResponse.payload) {
                        dispatch(notificationActions.success('Access Role Refreshed successful'));

                    }
                },
                error => {
                }
            );
    };
}

function initiateAccountActivation(email) {
    console.log("initiateAccountActivation");
    return async (dispatch) => {
        dispatch(request({ email }));
        userService.initiateAccountActivation(email)
            .then(
                generalResponse => {
                    dispatch(success(generalResponse));
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(notificationActions.error(error.toString()));
                }
            );
    };

    function request(request) { return { type: userConstants.INITATE_ACCOUNT_ACTIVATION_REQUEST, request } }
    function success(generalResponse) { return { type: userConstants.INITATE_ACCOUNT_ACTIVATION_SUCCESS, generalResponse } }
    function failure(error) { return { type: userConstants.INITATE_ACCOUNT_ACTIVATION_FAILURE, error } }
}

function validateAccountActivation(key, userId, activationKey) {
    console.log("validateAccountActivation");
    return async (dispatch) => {
        dispatch(request({ key, userId }));
        userService.validateAccountActivation(key, userId, activationKey)
            .then(
                generalResponse => {
                    dispatch(success(generalResponse));
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(notificationActions.error(error.toString()));
                }
            );
    };

    function request(request) { return { type: userConstants.VALIDATE_ACCOUNT_ACTIVATION_REQUEST, request } }
    function success(generalResponse) { return { type: userConstants.VALIDATE_ACCOUNT_ACTIVATION_SUCCESS, generalResponse } }
    function failure(error) { return { type: userConstants.VALIDATE_ACCOUNT_ACTIVATION_FAILURE, error } }

}

function changePassword(changePasswordRequest) {
    console.log("changePassword");
    return async (dispatch) => {
        dispatch(request({ changePasswordRequest }));
        userService.changePassword(changePasswordRequest)
            .then(
                generalResponse => {
                    dispatch(success(generalResponse));
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(notificationActions.error(error.toString()));
                }
            );
    };

    function request(request) { return { type: userConstants.CHANGE_PASSWORD_REQUEST, request } }
    function success(generalResponse) { return { type: userConstants.CHANGE_PASSWORD_SUCCESS, generalResponse } }
    function failure(error) { return { type: userConstants.CHANGE_PASSWORD_FAILURE, error } }

}


function updatePassword(updatePasswordRequest) {
    console.log("updatePassword");
    return async (dispatch) => {
        dispatch(request({ updatePasswordRequest }));
        userService.updatePassword(updatePasswordRequest)
            .then(
                generalResponse => {
                    dispatch(success(generalResponse));
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(notificationActions.error(error.toString()));
                }
            );
    };

    function request(request) { return { type: userConstants.UPDATE_PASSWORD_REQUEST, request } }
    function success(generalResponse) { return { type: userConstants.UPDATE_PASSWORD_SUCCESS, generalResponse } }
    function failure(error) { return { type: userConstants.UPDATE_PASSWORD_FAILURE, error } }

}

function logout() {
    userService.logout();
    history.push('/user/login');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cu');
    localStorage.removeItem('ac');
    localStorage.removeItem('authToken');
    localStorage.removeItem('authRefreshToken');
    return { type: userConstants.LOGOUT };
}

function getErrorMessage(error) {
    return error.response.data.error[0].message;
}