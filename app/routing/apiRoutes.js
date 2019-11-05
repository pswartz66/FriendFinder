
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
        // let currentUserName = bodyData.name;
        // let currentUserPhoto = bodyData.photo;
        let currentUserScore = bodyData.scores;

        let bestFriendMatch = {
            name: "",
            photo: ""
        }

        let totalDifference = 0;

        if (currentUserScore === undefined || currentUserScore.length == 0) {

            console.log('ending the program due to bad POST request' +
                '\n' + 'user submitted survey without selecting answer to a question');

            res.end();

        } else {

            // push latest user via req.body into the full friends list referenced above
            friendsData.push(bodyData);


            // loop through full friends list minus the current user
            for (let i = 0; i < friendsData.length - 1; i++) {

                // loop through individual friends scores and compare againt current user
                for (let j = 0; j < currentUserScore.length; j++) {

                    totalDifference += Math.abs(currentUserScore[j] - friendsData[i].scores[j])

                }

                friendsData[i]["matchScore"] = totalDifference;

                totalDifference = 0;

            }

            // loop to find the friend with the lowest matchScore
            let lowestScoreArr = [];
            for (let i = 0; i < friendsData.length - 1; i++) {
                
                lowestScoreArr.push(parseInt(friendsData[i].matchScore));

            }

            let lowestNum = Math.min(...lowestScoreArr);
            let lowestNumIndex = lowestScoreArr.indexOf(lowestNum);


            // console.log(lowestNum);
            // console.log(lowestNumIndex);
            // console.log(lowestScoreArr);

            bestFriendMatch.name = friendsData[lowestNumIndex].name;
            bestFriendMatch.photo = friendsData[lowestNumIndex].photo;

            console.log(bestFriendMatch);

            // res.json(friendsData);

            // send the best friend Match back to the client via a json string
            res.json(bestFriendMatch);

            // log the entire body array of objects to see what it looks like
            // console.log(friendsData);

        }





    });

}