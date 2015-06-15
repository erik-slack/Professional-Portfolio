var app = angular.module('devProfileApp');

app.service('dataService', function ($http, $cookies, constants, $location) {
    var authId = 'authId';
    var user = undefined;

    //Authentication/Cookies
    this.storeAuthIdForSession = function (aId) {
        //authId = aId;
        $cookies[constants.AUTH_ID] = aId;
        console.log('cookie name saved: ' + authId);
        console.log('cookie value saved: ' + $cookies[constants.AUTH_ID]);
    }

    this.getAuthId = function () {
        console.log('cookie name loaded: ' + authId);
        console.log('cookie value loaded: ' + $cookies[constants.AUTH_ID]);
        var aId = null;
        if (authId)
            aId = authId;
        else
            aId = $cookies[constants.AUTH_ID];

        return aId;
    }

    this.getAuthIdOrLogout = function () {
        var aId = this.getAuthId();

        //TODO: Show toast explaining that the user needs to log in due to expired or missing id
        //Log user out if there is no id
        if (!aId)
            $location.path(constants.ROUTE_LOGIN);
            //return 'Not Logged In';
        else
            console.log('gAIdOrLogout');
            return aId;
    }

    this.clearAuthId = function () {
        authId = null;
        $cookies[constants.AUTH_ID] = null;
    }

    //Data
    this.getUser = function () {
        if (!user) {
            var aId = this.getAuthIdOrLogout();

            if (aId) {
                user = this.usersRef().child(aId);
                return user;
            }

            console.log('aId: ' + aid);
        }
    }

    this.nextViewOptions = undefined;
});