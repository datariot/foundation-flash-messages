Template.meteorMessages.helpers({
  messages: function() {
    return messages.find();
  }
});

Template.meteorMessage.rendered = function() {
  var message = this.data;
  Meteor.defer(function(){
    messages.update(message._id, { $set: { seen: true }});
  })
}

Template.meteorMessage.events({
  "click .close": function(evt) {
    messages.remove({_id: this._id});
  }
});
