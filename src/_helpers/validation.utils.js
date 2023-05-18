export const validationUtils = {
    validateAlphaNumbericWithSpecial,
    validateAlphaNumbericWithSpace,
    validateAlphaNumberic,
    validateAlphaNumbericWithCommaAndReturn,
    validateAlpha,
    validateNumberic,
    validateDecimalNumberic,
    validateEmail,
    isValidRequest
};

function validateAlphaNumbericWithSpecial(value) {
    return !/[^0-9a-zA-Z-.,/?:\[\]\/\\${}@#%&()_ ]/.test(value);
}
function validateAlphaNumbericWithSpace(value) {
    return !/[^0-9a-zA-Z ]/.test(value);
}
function validateAlphaNumberic(value) {
    return !/[^0-9a-zA-Z]/.test(value);;
}
function validateAlphaNumbericWithCommaAndReturn(value) {
    return !/[^0-9a-zA-Z-\n,]/.test(value);
}
function validateAlpha(value) {
    return !/[^a-zA-Z]/.test(value);;
}
function validateNumberic(value) {
    return !/[^0-9]/.test(value);;
}

function validateDecimalNumberic(value) {
    return /^\d*\.?\d*$/.test(value);;
}

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function isValidRequest (fieldConfig, request, formErrors)  {
    let isValidForm = true;
    
    Object.keys(formErrors).forEach(function(key) {
        if(formErrors[key]) {
            isValidForm = false;
        }
    });
    
     if (isValidForm) {
      fieldConfig.forEach(element => {
        if (element.enabled && element.mandatory && (request[element.name] === undefined || request[element.name] === null)) {
          isValidForm = false;
        }
      });
    }
    return isValidForm;
}