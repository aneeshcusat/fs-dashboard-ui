import config from "config";

let BASE_API_PATH = "/api/v1/";
let USER_API_PATH = BASE_API_PATH + "user";
let DASHBOARD_API_PATH = BASE_API_PATH + "main";

const urlConfig = {
    USER_AUTHENTICATE: USER_API_PATH + "/authenticate",
    USER_LOGOUT: USER_API_PATH + "/logout",
    INITATE_ACCOUNT_ACTIVATION: USER_API_PATH + "/activation/request",
    VALIDATE_ACCOUNT_ACTIVATION: USER_API_PATH + "/validate/activation",
    CHANGE_PASSWORD: USER_API_PATH + "/change/password",
    UPDATE_PASSWORD: USER_API_PATH + "/update/password",
    USER_AUTH_REFRESH: USER_API_PATH + "/authrefresh",
    DASHBOARD_PATH: DASHBOARD_API_PATH + "/dashboard"
}

export default urlConfig