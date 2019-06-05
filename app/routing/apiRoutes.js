var friends = require("../data/friends.js");

// Routes
// =============================================================


module.exports = function (app) {

	// Displays all friends
	app.get('/api/friends', function (req, res) {
		res.json(friends);
    });
    
    /* This is what's coming in from the html file:
    
    var userData = {
                    name: $("#name").val(),
                    picture: $("#picture-link").val(),
                    scores: [
                        $("q1").val(),
                        $("q2").val(),
                        $("q3").val(),
                        $("q4").val(),
                        $("q5").val(),
                        $("q6").val(),
                        $("q7").val(),
                        $("q8").val(),
                        $("q9").val(),
                        $("q10").val()
                    ]
                };
                var currentURL = window.locatoin.origin;
            $.post(currentURL + "api/friends", userData, function(data) {
                $("#matchName").text(data.name);
                $("#matchPicture").attr("src", data.picture);
                $("#matchModal").modal("toggle");
            })
    
    
    */

	// Create New Friends - takes in JSON input
	app.post('/api/friends', function (req, res) {
		// req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        
        console.log(req.scores);

        var userData = req.body;
		var userName = userData.name;
		var userPicture = userData.picture;
        var userScores = userData.scores; // not sure about this.
        
        /* var parsedScores = userScores.map(function (each) {
			parseInt(each, 10);
		}); */

        var parsedScores = userScores.map(Number);

        console.log(userName);
        
		var bestMatch = {
			name: "",
			picture: "",
			score: 40
		};

		// call the compareArrs function inside a for loop that loops over friends[i].scores.
		var newFriend = [
			{
				name: req.body.name,
				picture: req.body.picture,
				scores: parsedScores // userData.scores

			}
		];


        var friendScores = friends.map(a => a.scores);
    //    console.log("friendScores from apiRoutes: " + friendScores);

		var newScores = newFriend[0].scores;
    //    console.log("newScores from apiRoutes: " + newScores);

		var closest = 40;

		function compareArrs(arr1, arr2) {
			var difference = 0;
			for (var i = 0; i < arr1.length; i++) {
				var d = Math.abs(arr1[i] - arr2[i]);
				difference += d;
			}
			console.log("This is difference in compareArrs:" + difference);
			return difference;
		}

		function findClosest(arr1, arr2) {

			var closestIndex;

			for (var i = 0; i < arr1.length; i++) {

				var d = compareArrs(arr1[i], arr2);
				if (d < closest) {
					closest = d;
					closestIndex = i;
				}
				console.log("This is closest in findClosest: " + closest); // this finds the lowest number
			}
			return closestIndex;
		}

		var bestScoreIndex = findClosest(friendScores, userScores);


		bestMatch = {
			name: friends[bestScoreIndex].name,
			picture: friends[bestScoreIndex].picture,
			score: closest
		};

        console.log(bestMatch);
        
        friends.push(newFriend);
        
        console.log("New friend added!");
	
        console.log(newFriend);

		res.json(bestMatch);

	}); // END api/friends app.post
} // END MODULE.EXPORTS