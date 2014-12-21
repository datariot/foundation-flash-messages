Package.describe({
  summary: "A package to display flash messages to the user with Foundation CSS styling.",
  name: "datariot:foundation-flash-messages",
  version: "0.2.0",
  git: "https://github.com/datariot/foundation-flash-messages.git"
});

Package.on_use(function(api, where) {
  api.use(['minimongo@1.0.0', 'mongo-livedata@1.0.0', 'templating@1.0.0'], 'client');
  api.use(['minimongo@1.0.0', 'mongo-livedata@1.0.0'], 'server');
  api.add_files(['messages-client.js', 'messages_list.html', 'messages_list.js'], 'client');
  api.add_files(['messages.js'], ['client', 'server']);
  api.add_files(['messages-server.js'], 'server');
  
  if (typeof api.export !== 'undefined') {
    api.export(['Messages', 'messages'], ['client', 'server']);
  }
  
});

Package.on_test(function(api) {
    api.use(['datariot:foundation-flash-messages','tinytest', 'test-helpers'], 'client');  
    api.add_files('messages_tests.js', 'client');
});
