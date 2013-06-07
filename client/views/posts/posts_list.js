Template.postItem.helpers({
	domain: function() {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});

Template.postsList.helpers({
	posts: function() {
		return Posts.find({}, {sort: {submitted: -1}, limit: postsHandle.limit()})
	},
	postsReady: function() {
		return ! postsHandle.loading();
	},
	allPostsLoaded: function() {
		return !postsHandle.loading() 
			&& Posts.find().count() < postsHandle.loaded();
	}
});

Template.postsList.events({
	'click .load-more': function(event) {
		event.preventDefault();
		postsHandle.loadNextPage();
	}
});
