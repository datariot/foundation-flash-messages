// Local (client-only) collection
Meteor.messages = new Meteor.Collection(null);

Meteor.Messages = {

	send: function(style, message) {
		Meteor.messages.insert({ style: style, message: message, seen: false });
	},

	clear: function() {
		Meteor.messages.remove({ seen: true });
	}
	
}