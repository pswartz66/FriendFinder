
const friendsData = require('../data/friends.js');


module.exports = function(app) {

    app.get('/api/friendslist', (req, res) => {

        res.json(friendsData);

    });

}