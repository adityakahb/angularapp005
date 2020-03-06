const FormatError = require('easygraphql-format-error');
const formatError = new FormatError([{
    name: 'INVALID_LOGIN',
    message: 'Please check username or password',
    statusCode: '400'
}, {
    name: 'INVALID_EMAIL',
    message: 'Please check the email',
    statusCode: '400'
}]);

const errorName = formatError.errorName;

module.exports = {formatError, errorName};