Tinytest.add("Message collection works", function(test) {
    test.equal(Meteor.messages.find({}).count(), 0);

    Meteor.Messages.send('error', 'A new error!');
    test.equal(Meteor.messages.find({}).count(), 1);

    Meteor.messages.remove({});
});

Tinytest.addAsync("Messages template works", function(test, done) {  
    Meteor.Messages.send('error', 'A new error!');
    test.equal(Meteor.messages.find({seen: false}).count(), 1);

    // render the template
    OnscreenDiv(Spark.render(function() {
        return Template.meteorMessages();
    }));

    // wait a few milliseconds
    Meteor.setTimeout(function() {
        test.equal(Meteor.messages.find({seen: false}).count(), 0);
        test.equal(Meteor.messages.find({}).count(), 1);
        Meteor.Messages.clear();

        test.equal(Meteor.messages.find({seen: true}).count(), 0);
        done();
    }, 500);
});