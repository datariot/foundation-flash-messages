foundation-flash-messages
=========================

A small package for displaying Foundation style flash messages. This is based on https://github.com/andreavaghi/meteor-flash-messages. Welcoming any pull requests that add thoughtfully to the package.

##Requirements
You need to include the (Foundation JS and CSS)[http://foundation.zurb.com/docs/components/alert-boxes.html] to support the alert boxes. You can do this by including them manually or by using (meteor-foundation)[https://atmosphere.meteor.com/package/foundation].

##Usage

Include the template somewhere in your index.html file:
```javascript
  {{> meteorMessages}}
```
And then send messages:
```javascript
  Meteor.Messages.send(STYLE,MESSAGE);
```
And to clear messages:
```javascript
  Meteor.Messages.clear();
```
For example:
```javascript
  Meteor.Messages.send('alert', 'There was a problem signing you in.');
  Meteor.Messages.send('info', 'We will be shutting down in 10 minutes.');
  Meteor.Messages.send('success', 'Your account has been updated!');