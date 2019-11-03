
const friendsData = require('../data/friends.js');



module.exports = function(app) {

    // initial get response gives the client the sample object
    // from friends.js file
    app.get('/api/friendslist', (req, res) => {

        res.json(friendsData);

    });


    // this post request saves the response and pushes it back
    // to the client to be displayed in our API
    app.post('/api/friendslist', function(req, res){

        friendsData.push(req.body);
        res.json(true);

    });

}