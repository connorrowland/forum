var root = __dirname;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var logger = require('morgan');
var path = require('path');
var db = require('./db.js');


// app.listen(3000);
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function (){
  console.log('App running on port : ', app.get('port'));
});

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(root, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use(logger('dev'));

app.use(methodOverride(function(req, res) {
 if (req.body && typeof req.body === 'object' && '_method' in req.body) {
   // look in urlencoded POST bodies and delete it
   var method = req.body._method
   delete req.body._method
   return method
 }
}));

///routes
//get all posts and render on page
app.get('/', function (req, res) {
  db.all('posts', function (data) {
    var post = {
      posts: data
    }
    res.render('posts', post);
  });
});
///new post
app.get('/newPost', function (req, res) {
  res.render('newPost');
});
app.post('/newPost', function (req, res){
  db.create('posts', req.body, function (data) {
      res.render('posts');
      res.redirect('/')
  });
});
//list of all users
app.get('/users', function (req, res){
  db.all('users', function (data) {
    var user = {
      users: data
    }
    res.render('users', user);
  });
})
//add a comment
app.post("/newComment/:id", function (req, res) {
 db.update('posts', req.body, req.params.id, function (data) {
   res.redirect('/')
 })
})

