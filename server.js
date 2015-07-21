var root = __dirname;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var logger = require('morgan');
var path = require('path');
var db = require('./db.js');


app.listen(3000);

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
app.get('/', function (req, res) {
  db.all('posts', function (data) {
    var post = {
      posts: data
    }
    res.render('posts', post);
  });
});

app.get('/newTopic', function (req, res) {
  res.render('newTopic');
});
app.post('/newUser', function (req, res){
	db.create('users', req.body, function (data) {
  		res.redirect('/');
 	});
})