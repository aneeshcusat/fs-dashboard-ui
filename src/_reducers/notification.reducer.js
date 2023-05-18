import { notificationConstants } from '../_constants';

export function notification(state = {}, action) {
  switch (action.type) {
    case notificationConstants.PAGEMESSAGE:
      return {
        type: 'error',
        pageMessage: action.message,
        title: action.title
      };
    case notificationConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message,
        title: action.title
      };
    case notificationConstants.INFO:
      return {
        type: 'info',
        message: action.message,
        title: action.title
      };
    case notificationConstants.WARNING:
      return {
        type: 'warning',
        message: action.message,
        title: action.title
      };
    case notificationConstants.ERROR:
      return {
        type: 'error',
        message: action.message,
        title: action.title
      };
    case notificationConstants.CLEAR:
      return {};
    default:
      return state
  }
}