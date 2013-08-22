Package.describe({
	summary: "A package to display flash messages to the user with Foundation CSS styling."
});

Package.on_use(function(api, where) {
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
	api.add_files(['messages.js', 'messages_list.html', 'messages_list.js'], 'client');
	
	if (typeof api.export !== 'undefined') {
    api.export(['Messages', 'messages'], 'client');
  }
	
});

Package.on_test(function(api) {
  	api.use(['foundation-flash-messages','tinytest', 'test-helpers'], 'client');  
  	api.add_files('messages_tests.js', 'client');
});