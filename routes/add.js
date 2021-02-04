var data = require("../data.json");

exports.addFriend = function(request, response){
	newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "https://loremflickr.com/320/360/cartoon, girl/all"
	}
	data.friends.push(newFriend);   
	response.render('index',data);
};