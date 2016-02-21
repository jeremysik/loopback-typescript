function appUser(AppUser:any) {

    AppUser.greet = function (msg:string, cb:Function) {

        console.log(AppUser);

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

export = appUser;
