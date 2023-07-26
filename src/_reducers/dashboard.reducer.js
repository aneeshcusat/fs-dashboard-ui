import { dashboardConstants } from '../_constants';

export function dashboard(state = {}, action) {
  switch (action.type) {
    case dashboardConstants.DASHBOARD_REQUEST:
      return {
        ...state,
        requestDashboardData: true
      };
    case dashboardConstants.DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboardData: action.dashboardResponse
        
      };
    case dashboardConstants.DASHBOARD_FAILURE:
      return {
        error: true,
        errorMessage: action.error
      };
    default:
      return state
  }
}