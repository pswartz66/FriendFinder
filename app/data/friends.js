

let surveyArray = [
    {
        "name":"Phil",
        "photo":"http://www.dumpaday.com/wp-content/uploads/2018/06/photos-1.jpg",
        "scores":[
            1,
            2,
            3,
            1,
            3
        ]
    },
    {
        "name":"John",
        "photo":"https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg",
        "scores":[
            3,
            4,
            3,
            5,
            3
        ]
    },
    {
        "name":"Joe",
        "photo":"http://www.funcage.com/blog/wp-content/uploads/2013/11/Random-Photoshopped-Pictures-006.jpg",
        "scores":[
            2,
            1,
            3,
            1,
            4
        ]
    }
];

let scores = [];
        let surveyObj = {};

        let questionState = false;


        $('#Q1 > a').on("click", function () {

            event.preventDefault();

            if (scores.length === 0) {

                scores.push($(this).text());

                console.log(scores);

            }

        });

        $('#Q2 > a').on("click", function () {

            event.preventDefault();

            if (scores.length === 1) {

                scores.push($(this).text());

                console.log(scores);

            }

        });

        $('#Q3 > a').on("click", function () {

            event.preventDefault();

            if (scores.length === 2) {

                scores.push($(this).text());

                console.log(scores);

            }

        });

        $('#Q4 > a').on("click", function () {

            event.preventDefault();

            if (scores.length === 3) {

                scores.push($(this).text());

                console.log(scores);

            }

        });


        $('#Q5 > a').on("click", function () {

            event.preventDefault();

            if (scores.length === 4) {

                scores.push($(this).text());

                console.log(scores);

            }

        });



        $('#submit').on("click", function () {

            event.preventDefault();

            let name = $('#name').val().trim();
            surveyObj["name"] = name;

            let photo = $('#photo').val().trim();
            surveyObj["photo"] = photo;


            surveyObj["scores"] = scores;


            $.post("/api/friendslist", surveyObj,
                function (data) {

                    // console.log(surveyObj);

                    // If a friend is available... tell user it's been added.
                    if (data) {
                        console.log("A friend was added to the list");
                    }

                    // If no friend was added then debug as to why someone wasn't added.
                    else {
                        console.log("No one was added to the friendslist");
                    }

                    // Clear the form when submitting
                    $('#name').val("");
                    $('#photo').val("");

                });


        });




module.exports = surveyArray;



