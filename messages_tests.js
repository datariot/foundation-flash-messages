Tinytest.add("message-collection", function(test) {
    test.equal(messages.find({}).count(), 0);

    Messages.send('error', 'A new error!');
    test.equal(messages.find({}).count(), 1);

    messages.remove({});
});

Tinytest.addAsync("message-template", function(test, done) {  
    Messages.send('error', 'A new error!');
    test.equal(messages.find({seen: false}).count(), 1);

    // render the template
    OnscreenDiv(Spark.render(function() {
        return Template.meteorMessages();
    }));

    // wait a few milliseconds
    Meteor.setTimeout(function() {
        test.equal(messages.find({seen: false}).count(), 0);
        test.equal(messages.find({}).count(), 1);
        Messages.clear();

        test.equal(messages.find({seen: true}).count(), 0);
        done();
    }, 500);
});