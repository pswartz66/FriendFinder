
const friendsData = require('../data/friends.js');
const path = require('path');


modeule.exports = function(app) {

    app.get('/api/friendslist', (req, res) => {

        res.json(friendsData);

    });

}