import { dashboardConstants } from '../_constants';
import { dashboardService } from '../_services';
import { notificationActions } from '.';

export const dashboardActions = {
    load
};

function load(startDate, endDate) {
    return async (dispatch) => {

        dispatch(request({ startDate, endDate }));
        dashboardService.load(startDate, endDate)
            .then(
                dashboardResponse => {
                    if (dashboardResponse && dashboardResponse.payload) {
                        dispatch(success(dashboardResponse.payload));
                    } else if (dashboardResponse && dashboardResponse.error && dashboardResponse.error.length > 0) {
                        dispatch(failure(dashboardResponse.error[0].message));
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

    function request(request) { return { type: dashboardConstants.DASHBOARD_REQUEST, request } }
    function success(dashboardResponse) { return { type: dashboardConstants.DASHBOARD_SUCCESS, dashboardResponse } }
    function failure(error) { return { type: dashboardConstants.DASHBOARD_FAILURE, error } }
}

function getErrorMessage(error) {
    return error.response.data.error[0].message;
}
