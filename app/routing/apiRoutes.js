
const friendsData = require('../data/friends.js');


module.exports = function (app) {

    // initial get response gives the client the sample object
    // from friends.js file
    app.get('/api/friendslist', (req, res) => {

        res.json(friendsData);

    });


    // post request to save the response and pushes it back
    // to the client to be displayed in our api/friendslist path
    app.post('/api/friendslist', (req, res) => {

        // create a variable to store the entire request body
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

                // create a new object property called matchScore to store the
                // total difference for each friend calculated above
                friendsData[i]["matchScore"] = totalDifference;

                // set totalDifference counter back to 0
                totalDifference = 0;

            }

            // loop to find the friend with the lowest matchScore
            let lowestScoreArr = [];
            for (let i = 0; i < friendsData.length - 1; i++) {
                
                lowestScoreArr.push(parseInt(friendsData[i].matchScore));

            }

            // find the lowest number in the array
            let lowestNum = Math.min(...lowestScoreArr);

            // find the index of the lowest number in the array
            // flaw: this will always stop at the first smallest number
            // does not find multiple friends with the same smallest number
            let lowestNumIndex = lowestScoreArr.indexOf(lowestNum);


            // append the found friends name and photo back into the object
            bestFriendMatch.name = friendsData[lowestNumIndex].name;
            bestFriendMatch.photo = friendsData[lowestNumIndex].photo;


            // used to view the entire friendsData in JSON format
            // res.json(friendsData);

            // send the best friend Match back to the client via a json string
            res.json(bestFriendMatch);


            // used for testing purposes:
            // log the entire body array of objects to see what it looks like
            // console.log(friendsData);

        }


    });

}