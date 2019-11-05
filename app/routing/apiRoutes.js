
const friendsData = require('../data/friends.js');


module.exports = function (app) {

    // initial get response gives the client the sample object
    // from friends.js file
    app.get('/api/friendslist', (req, res) => {

        res.json(friendsData);

    });


    // post request to save the response and pushes it back
    // to the client to be displayed in our api/friendslist path
    app.post('/api/friendslist', function (req, res) {

        let bodyData = req.body;

        // variables to store the latest user's name, photo, and scores
        let currentUserName = bodyData.name;
        let currentUserPhoto = bodyData.photo;
        let currentUserScore = bodyData.scores;

        let bestFriendMatch = {
            name: "",
            photo: ""
        }

        let totalDifference = 0;

        if (currentUserScore === undefined || currentUserScore.length == 0) {

            console.log('ending the program due to bad POST request' +
                '\n' + 'user submitted survey without selecting scores to a question');

            res.end();

        } else {

            // push latest user via req.body into the full friends list referenced above
            friendsData.push(bodyData);


            // console.log(currentUserName);
            // console.log(currentUserPhoto);
            // console.log(currentUserScore.length);
            // console.log(friendsData[0].scores);




            // loop through full friends list minus the current user
            for (let i = 0; i < friendsData.length - 1; i++) {

                console.log(friendsData[i].name);

                // loop through individual friends scores and compare againt current user
                for (let j = 0; j < currentUserScore.length; j++) {

                    totalDifference += Math.abs(currentUserScore[j] - friendsData[i].scores[j])

                    // console.log(totalDifference);
                }

                friendsData[i]["matchScore"] = totalDifference;

                totalDifference = 0;

                console.log(friendsData[i]);

            }



            res.json(friendsData);



            // log the entire body array of objects to see what it looks like
            // console.log(friendsData);


        }


    });

}