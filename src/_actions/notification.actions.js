import { notificationConstants } from '../_constants';

export const notificationActions = {
    success,
    info,
    warning,
    error,
    pageMessage,
    clear
};
function success(message) {
    return { type: notificationConstants.SUCCESS, message, title: "Success" };
}
function info(message) {
    return { type: notificationConstants.INFO, message, title: "Info" };
}
function warning(message) {
    return { type: notificationConstants.WARNING, message, title: "Warning" };
}
function error(message) {
    return { type: notificationConstants.ERROR, message, title: "Error" };
}
function pageMessage(message) {
    return { type: notificationConstants.PAGEMESSAGE, message, title: "Error" };
}
function clear() {
    return { type: notificationConstants.CLEAR };
}   