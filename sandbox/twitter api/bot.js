console.log('hello world');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// GET
var params = { 
	q: 'egormad', 
	count: 4 
};

function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
}

T.get('search/tweets', params, gotData);


// POST
var tweet = { 
	status: 'Hello world! Этот твит размещен с помощью node.js и twitter api' 
};

function tweeted(err, data, response) {
	if (err) {
		console.log("ERROR!!");
	} else {
		console.log("it worked!!");
	}
};

// T.post('statuses/update', tweet, tweeted);