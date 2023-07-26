
import Axios from 'axios';
import { store, commonUtils } from '../_helpers'
import config from 'config';
import urlConfig from 'url.config';
import { notificationActions, userActions } from '../_actions';

export const axiosUtils = {
    get,
    getWithParam,
    post,
    remove,
    put
};

const { dispatch } = store;

function getRequestHeaders() {
    let currentUser = commonUtils.getCurrentUser();
    let currentActiveTeamId = localStorage.getItem('currentActiveTeamId');
    if (currentUser) {
        return {
            headers: {
                'Uid': currentUser.id,
                'Current-User-Team-Id': currentUser.userTeamId,
                'Current-Active-Team-Id': (currentActiveTeamId === null ? currentUser.userTeamId : currentActiveTeamId),
                'Request-Origin': 'gi'
            }
        }
    }
}
Axios.defaults.timeout = 30000;
Axios.interceptors.request.use(config => {
    console.log('Request was sent');
    config.params = config.params || {};
    config.params['api-key'] = config.API_KEY;
    config.headers['content-type'] = 'application/json';
    let authToken = JSON.parse(localStorage.getItem('authToken'));
    if (authToken != null) {
        config.headers.Authorization = 'Bearer ' + authToken;
    }
    return config;
}, async error => {
    console.log('Request was not send ' + error);
    return Promise.reject(error);
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    })
    
    failedQueue = [];
  }

function createAxiosResponseInterceptor() {
    console.log('Initializing interceptor');
    const interceptor = Axios.interceptors.response.use(
        response => response,
        async error => {
            const originalRequest = error.config;
            if (error.response && error.response.status === 401 && !originalRequest._retry &&  originalRequest.url.indexOf("/users/") === -1 && originalRequest.url.indexOf("/authrefresh") === -1) {
                //Axios.interceptors.response.eject(interceptor);
                
                if (isRefreshing) {
                    return new Promise(function(resolve, reject) {
                      failedQueue.push({resolve, reject})
                    }).then(token => {
                      originalRequest.headers['Authorization'] = 'Bearer ' + token;
                      return Axios(originalRequest);
                    }).catch(err => {
                      return Promise.reject(err);
                    })
                  }
        
                originalRequest._retry = true;
                isRefreshing = true;
        
                console.log('Refreshing auth token');
                localStorage.setItem('authToken', localStorage.getItem('authRefreshToken'));
                return new Promise((resolve, reject) => {
                    Axios.get(config.BACK_END_API_ENDPOINT + urlConfig.USER_AUTH_REFRESH + '/' + commonUtils.getCurrentUserId(), {})
                        .then((res) => {
                            localStorage.setItem('cu', res.data.payload.userDetails);
                            localStorage.setItem('authToken', JSON.stringify(res.data.payload.authToken));
                            localStorage.setItem('authRefreshToken', JSON.stringify(res.data.payload.authRefreshToken));
                            //error.response.config.headers.Authorization = 'Bearer ' + res.data.payload.authToken;
                            //resolve(Axios(error.response.config));
                            processQueue(null, res.data.payload.authToken);
                            resolve(Axios(originalRequest));
                        },
                            error => {
                                if (error.response && error.response.status === 401) {
                                    userActions.logout();
                                    window.location.reload();
                                }
                            }).catch((err) => {
                                processQueue(err, null);
                                reject(err);

                                userActions.logout();
                                window.location.reload();
                            })
                            .finally(() => { isRefreshing = false })
                })
            } else if (error.message === 'Network Error' || error.response.status === 502) {
                console.log("NETWORK ERROR");
                //disconnected from dashboard-tool server.
                //your network connection may have been lost or dashboard-tool server may be down.
                if (notificationActions) {
                    dispatch(notificationActions.clear());
                }
                dispatch(notificationActions.error(error.message));
                dispatch(notificationActions.pageMessage("Application is temporary unavailable due to technical error. Please contact IT support to get it resolved."));
            } if (error.response && error.response.status === 412 && error.response.data) {
                return Promise.reject(error.response.data.error);
            } else {
                return Promise.reject(error);
            }
        }
    )
}
createAxiosResponseInterceptor();

function insertBasicInfoToBody(requestBody) {
    let currentUser = commonUtils.getCurrentUser();
    if (currentUser != null) {
        return {
            "createdBy": currentUser.id,
            "modifiedBy": currentUser.id,
            "userTeamId": currentUser.userteamId,
            ...requestBody
        }
    }
    
    return requestBody;
}

async function post(relativeUrl, requestBody) {
    const response = await Axios.post(config.BACK_END_API_ENDPOINT + relativeUrl, insertBasicInfoToBody(requestBody), getRequestHeaders()).catch(error => { console.log(error); });;
    return await handleResponse(response);
}

async function get(relativeUrl) {
    console.log("GER request");
    console.log(getRequestHeaders());
    const response = await Axios.get(config.BACK_END_API_ENDPOINT + relativeUrl, getRequestHeaders());
    return await handleResponse(response);
}

async function getWithParam(relativeUrl, params) {

    let requestBody = {
        headers: getRequestHeaders().headers,
        params: params
    }
    const response = await Axios.get(config.BACK_END_API_ENDPOINT + relativeUrl, requestBody);
    return await handleResponse(response);
}
async function remove(relativeUrl) {
    const response = await Axios.delete(config.BACK_END_API_ENDPOINT + relativeUrl, getRequestHeaders());
    return await handleResponse(response);
}
async function put(relativeUrl, requestBody) {
    const response = await Axios.put(config.BACK_END_API_ENDPOINT + relativeUrl, insertBasicInfoToBody(requestBody), getRequestHeaders());
    return await handleResponse(response);
}

function handleResponse(response) {
    if (response && response.status === 500) {
        window.location = "/error/error500"
        return "Network error";
    } else if (response && response.status !== 200 && response.status !== 201) {
        const error = (response.data.payload.error && response.data.payload.error[0]) || response.data.payload.error[0].message;
        return Promise.reject(error);
    } else if (!response) {
        return "Network error";
    }
    return response.data;
}