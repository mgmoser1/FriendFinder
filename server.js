// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
/* app.use(express.urlencoded({ extended: true }));
app.use(express.json()); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "applicatoin/vnd.api+json"}));



// this part doesn't work yet.
// https://www.youtube.com/watch?v=kWu9stxD6m0

app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// end this part doesn't work yet.

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});


