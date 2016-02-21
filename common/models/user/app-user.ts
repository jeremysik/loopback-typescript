module common.models.user {
    export function appUser(AppUser:any) {

        AppUser.greet = function (msg:string, cb:Function) {
            cb(null, 'Greetings... ' + msg);
        };

        AppUser.remoteMethod(
            'greet',
            {
                accepts: {arg: 'msg', type: 'string'},
                returns: {arg: 'greeting', type: 'string'}
            }
        );

    }
}

export = common.models.user.appUser;
