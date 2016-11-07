// server.js
// load the things we need
var express = require('express');
var app = express();
var ig  = require('instagram-node').instagram();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// instagram-node settings
ig.use({ access_token: '181370628.1677ed0.97b1e1eac3754990868b247afd8ae844' });
ig.use({ 
  client_id: 'e0e51c60672c4f09abe28c46c71a3a7a',
  client_secret: 'db11c575a8ae4f1aa90a03ba1d1345d8' 
});




var accessToken = '181370628.1677ed0.97b1e1eac3754990868b247afd8ae844';
var InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);

instagramAPI.userSelf().then(function(result) {
    res.render('pages/index', { user_data: result.data });
    console.log(result.data); // user info 
    console.log(result.limit); // api limit 
    console.log(result.remaining) // api request remaining 
	}, function(err){
	    console.log(err); // error info 
	});



// index page 
app.get('/', function(req, res) {
  // используем пакет instagram для получения популярных картинок
  ig.media_popular(function(err, medias, remaining, limit) {
    // отображаем главную страницу и передаём в неё изображения
    res.render('pages/index', { grams: medias });
  });
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');