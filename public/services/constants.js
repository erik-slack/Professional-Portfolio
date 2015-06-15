var app = angular.module('devProfileApp');

app.provider('constants', function () {

    var BASE_TPL = 'views';
    var TEMPLATE_URL_LANDING = BASE_TPL + '/landing';
    var EXT = '.tpl.html';

    var vals = {
        //ROUTES
        ROUTE_LANDING: '/',
        ROUTE_LOGIN: '/login',
        ROUTE_SIGNUP: '/signup',
        ROUTE_404: '/404',

        //TEAMPLTES
        TPL_LOGIN: BASE_TPL + '/login/login' + EXT,
        TPL_SIGNUP: BASE_TPL + '/signup/signup' + EXT,
        TPL_404: BASE_TPL + '/404' + EXT,

        TPL_RESUME: BASE_TPL + '/resume/resume' + EXT,
        TPL_PORTFOLIO: BASE_TPL + '/portfolio/portfolio' + EXT,
        TPL_PROFILE: BASE_TPL + '/profile/profile' + EXT,
        
        //MISC
        AUTH_TOKEN: "auth_token",
        AUTH_ID: "auth_id",

        //Errors
        ERROR_CODE_INVALID_EMAIL: 'INVALID_EMAIL',
        ERROR_CODE_INVALID_PASSWORD: 'INVALID_PASSWORD',
        ERROR_MSG_INCORRECT_EMAIL: 'Email account does not exist',
        ERROR_MSG_INVALID_EMAIL: 'Not a valid email address',
        ERROR_MSG_INVALID_PASSWORD: 'Incorrect password for this email address',
        ERROR_MSG_LOGIN_GENERIC: 'Email and password are not in our records'
    };

    return {
        getConstants: function () {
            return vals;
        },

        $get: function () {
            return vals;
        }
    }
});