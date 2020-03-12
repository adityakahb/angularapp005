const FormatError = require('easygraphql-format-error');
const formatError = new FormatError([{
    name: 'LOGIN_FAILED',
    message: 'LOGIN_FAILED',
    statusCode: '400'
}, {
    name: 'INVALID_EMAIL',
    message: 'Please check the email',
    statusCode: '400'
}]);


const errorFn = (err) => {
    try {
        throw new Error(errorName[err]);
    } catch (error) {
        throw error;
    }
};

const errorName = formatError.errorName;
module.exports = {formatError, errorName, errorFn};