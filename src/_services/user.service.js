import { axiosUtils, commonUtils } from '../_helpers';
import urlConfig from 'url.config';

export const userService = {
    login,
    logout,
    initiateAccountActivation,
    validateAccountActivation,
    changePassword,
    updatePassword,
    authRefresh
};

async function login(email, password) {
    console.log("login service ");
    const userResponse = await axiosUtils.post(urlConfig.USER_AUTHENTICATE, JSON.stringify({ email, password }));
    return updateUserInfo(userResponse);
}
async function authRefresh() {
    console.log("login service ");
    const userResponse = await axiosUtils.get(urlConfig.USER_AUTH_REFRESH + '/' + commonUtils.getCurrentUserId());
    return updateUserInfo(userResponse);
}

function updateUserInfo(userResponse){
    if (userResponse &&  userResponse.payload) {
        localStorage.setItem('cu', JSON.stringify(userResponse.payload.userDetails));
        localStorage.setItem('authToken', JSON.stringify(userResponse.payload.authToken));
        localStorage.setItem('authRefreshToken', JSON.stringify(userResponse.payload.authRefreshToken));
    }
    return userResponse;
}

async function initiateAccountActivation(email) {
    console.log("initiateAccountActivation service ");
    const generalResponse = await axiosUtils.post(urlConfig.INITATE_ACCOUNT_ACTIVATION, { email });
    return generalResponse;
}


async function validateAccountActivation(key, userId, activationKey) {
    console.log("validateAccountActivation service ");
    const generalResponse = await axiosUtils.post(urlConfig.VALIDATE_ACCOUNT_ACTIVATION, { "identifier": key, userId, activationKey });
    return generalResponse;
}



async function changePassword(changePasswordRequest) {
    console.log("changePassword service ");
    const generalResponse = await axiosUtils.post(urlConfig.CHANGE_PASSWORD, changePasswordRequest);
    return generalResponse;
}



async function updatePassword(updatePasswordRequest) {
    console.log("updatePasswordRequest service ");
    const generalResponse = await axiosUtils.post(urlConfig.UPDATE_PASSWORD, updatePasswordRequest);
    return generalResponse;
}


async function logout() {
    let currentUser = commonUtils.getCurrentUser();;
    await axiosUtils.post(urlConfig.USER_LOGOUT, { id: currentUser.id });
}
