var db = require('./db.js');

///inserting random shit so i can render it
userNames = ['Connor Rowland', 'Barack Obama','Hillary Clinton']
userPhotos = [
'http://www.apptactics.net/wp-content/uploads/2013/01/iOS-Emoticon-300x300.png',
'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/Administration/People/president_official_portrait_hires.jpg',
'http://s3.amazonaws.com/media.wbur.org/wordpress/11/files/2012/04/0410_hillary-texting-e1334076553223.jpg']
postNames = ['French Fries', 'General Assembly' ]
postBodies = ['French friez r soooo good i love them so much. If you luv french fries too rate this post with 5 starz! hah', 'General Assembly transforms thinkers into creators through education and opportunities in technology, business, and design.']
ratings = [5, 4]
variousTopics = ['Food', 'Politics','Educational','Media','Technology', 'Other...']

///filling the schema w values
var connor = {
	name: userNames[0],
	img_url: userPhotos[0]
}
var hillary = {
	name: userNames[1],
	img_url: userPhotos[1]
}
var barack = {
	name: userNames[2],
	img_url: userPhotos[2]
}


var genAssemPost = {
	post_name: postNames[0],
	body: postBodies[0],
	rating: ratings[0],
	topic_id: 4,
	user_id : 1
}
var frenchFryPost = {
	post_name: postNames[1],
	body: postBodies[1],
	rating: ratings[1],
	topic_id: 6,
	user_id : 1
}

db.create('users', connor, function (data){
	console.log("connor is created");
});
db.create('users', hillary, function (data){
	console.log("hillary is created");
});
db.create('users', barack, function (data){
	console.log("barack is created");
});

for(var i = 0; i < variousTopics.length; i++) {
	db.create('topics', {name: variousTopics[i]}, function (data) {
		console.log("topic " + variousTopics[i] + " has been created");
	});
};

db.create('posts', genAssemPost, function (data){
	console.log('genAssemPost created');
});

db.create('posts', frenchFryPost, function (data){
	console.log('frenchFryPost created');
});



