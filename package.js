Package.describe({
  summary: "A package to display flash messages to the user with Foundation CSS styling."
});

Package.on_use(function(api, where) {
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.use(['minimongo', 'mongo-livedata'], 'server');
  api.add_files(['messages-client.js', 'messages_list.html', 'messages_list.js'], 'client');
  api.add_files(['messages.js'], ['client', 'server']);
  api.add_files(['messages-server.js'], 'server');
  
  if (typeof api.export !== 'undefined') {
    api.export(['Messages', 'messages'], ['client', 'server']);
  }
  
});

Package.on_test(function(api) {
    api.use(['foundation-flash-messages','tinytest', 'test-helpers'], 'client');  
    api.add_files('messages_tests.js', 'client');
});
