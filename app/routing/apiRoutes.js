
const friendsData = require('../data/friends.js');


module.exports = function(app) {

    // initial get response gives the client the sample object
    // from friends.js file
    app.get('/api/friendslist', (req, res) => {

        res.json(friendsData);

    });


    // post request to save the response and pushes it back
    // to the client to be displayed in our api/friendslist path
    app.post('/api/friendslist', function(req, res){

        let bodyData = req.body; 

        // push latest user via req.body into the full friends list referenced above
        friendsData.push(bodyData);

        // variables to store the latest user's name, photo, and scores
        let currentUserName = bodyData.name;
        let currentUserPhoto = bodyData.photo;
        let currentUserScore = bodyData.scores;

        /* console.log(currentUserName);
        console.log(currentUserPhoto);
        console.log(currentUserScore); */

        let bestFriendMatch = {
            name: "",
            photo: ""
        }

        let totalDifference = 0;

        // loop through fulls friends list minus the current user
        for (let i = 0; i < friendsData.length - 1; i++){

            console.log(friendsData[i].name);


        }



        res.json(friendsData);



        // log the entire body array of objects to see what it looks like
        // console.log(friendsData);
        
        
        // res.json(true);

    });

}