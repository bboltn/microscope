if (Posts.find().count() === 0)
{
	Posts.insert({
		title: "Introducting Telescope",
		author: "Sacha Greif",
		url: "http://sachagreif.com/introducing-telescope/"
	});

	Posts.insert({
		title: "Meteor",
		author: "Tom Coleman",
		url: "http://meteor.com"
	});

	Posts.insert({
		title: "The Meteor Book",
		author: "Tom Coleman",
		url: "http://themeteorbook.com"
	});

	Posts.insert({
		title: "Fountain City Code",
		author: "Brian Bolton",
		url: "http://www.fountaincitycode.com"
	});
}