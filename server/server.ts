var loopback = require('loopback'),
    boot = require('loopback-boot'),
    app = loopback(),
// To keep TSC happy
    module:any,
    __dirname:string;

app.start = function () {
    // start the web server
    return app.listen(function () {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err:any) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if ((<any>require).main === module)
        app.start();
});

export = app;