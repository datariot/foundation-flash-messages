
Meteor.publish("messages", function() {
  return messages.find();
});
