// This file is shared between server and client

// Collection shared between client and server
messages = new Meteor.Collection("messages");

Messages = {

  send: function(style, message) {
    console.log("Logging message:", message);
    Meteor.call("messages_insert", style, message);
  },

  clear: function() {
    console.log("Clearing messages");
    Meteor.call("messages_clear");
  }
  
}

Meteor.methods({
  messages_clear: function() {
    console.log("Clearing messages");
    messages.remove({seen: true}); 
  },

  messages_insert: function(style, message) {
    messages.insert({ style: style, message: message, seen: false });
  }
});
