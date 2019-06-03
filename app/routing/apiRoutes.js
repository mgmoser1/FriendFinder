var friends = require("../data/friends.js");

// Routes
// =============================================================


module.exports = function (app) {

	// Displays all friends
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	// Create New Friends - takes in JSON input
	app.post('/api/friends', function (req, res) {
		// req.body hosts is equal to the JSON post sent from the user
		// This works because of our body parsing middleware

		var response = req.body;
		var newName = response.name;
		var newPicture = response.pictureLink;
		var newScores = response.scores; // not sure about this.

		var parsedScores = newScores.map(function (each) {
			parseint(each);
		});

		console.log(newName);
		var bestMatch = {
			name: "",
			picture: "",
			score: 40
		};

		// call the compareArrs function inside a for loop that loops over friends[i].scores.
		var newFriend = [
			{
				name: newName,
				picture: newPicture,
				scores: parsedScores

			}
		];


		var friendScores = friends.map(a => a.scores);

		var newScores = newFriend[0].scores;

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

		var bestScoreIndex = findClosest(friendScores, newScores);


		bestMatch = {
			name: friends[bestScoreIndex].name,
			picture: friends[bestScoreIndex].picture,
			score: closest
		};

		console.log(bestMatch);
		// Using a RegEx Pattern to remove spaces from newCharacter
		// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
		/* 	newFriend.routeName = newFriend.name
			.replace(/\s+/g, '')
			.toLowerCase(); */

		console.log(newFriend);

		friends.push(newFriend);

		res.json(bestMatch);
	});
}






