// Local (client-only) collection
messages = new Meteor.Collection(null);

Messages = {

	send: function(style, message) {
		messages.insert({ style: style, message: message, seen: false });
	},

	clear: function() {
		messages.remove({ seen: true });
	}
	
}