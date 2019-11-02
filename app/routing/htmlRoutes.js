
let path = require('path');

module.exports = function(app) {

    app.get('/', (req, res, next) => {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
    
    
    app.get('/survey', (req, res, next) => {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    

    app.use( function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    })
}