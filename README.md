##Foundation Flash Messages

A small package for displaying Foundation style flash messages. This is based on https://github.com/andreavaghi/meteor-flash-messages.

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
```