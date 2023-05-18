export const commonActions = {
    getErrorMessage
};

function getErrorMessage(error) {
    return error && error.response && error.response.data && error.response.data.error && error.response.data.error[0].message
}