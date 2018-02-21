var express = require('express')
  , cons = require('consolidate')
  , app = express();
  var axios= require('axios');

// assign the dust engine to .html files
app.engine('html', cons.dust);

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var users = [];
users.push({ name: 'tobi' });
users.push({ name: 'loki' });
users.push({ name: 'jane' });

app.get('/', function(req, res){
  res.render('index', {
    title: 'Cons.js'
  });
});



app.get('/videos', function(req, res){
 //call 
axios.get("https://www.googleapis.com/youtube/v3/search?q=awe&part=snippet&maxResults=10&key=")
.then(function (response) {
    res
    console.log(response.data);
    res.render('videos', {
      title: 'awe videos',
      videos: response.data.items
    });
  })
  .catch(function (error) {
    console.log(error);
  });
  //call
  
});


app.get('/users', function(req, res){
  res.render('users', {
    title: 'Users',
    users: users
  });
});

app.listen(3000);
console.log('Express server listening on port 3000');