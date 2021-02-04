var data = require("../data.json");

exports.addFriend = function(request, response){
	newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "https://upload.wikimedia.org/wikipedia/commons/7/74/Smiling_Stick_Figure_with_Waving_Arms.png"
	}
	data.friends.push(newFriend);   
	response.render('index',data);
};