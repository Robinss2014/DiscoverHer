$(function() {
    console.log( "Ready!" );

    // App ID for Parse
    Parse.initialize("H4usgNzycWJZsjkURvfCE7wspwkJaT9vW3QoAGoX", "vXVdPjkDE8ulBHnU6ku8wsQ0T5KK4lsOXbrQzh2A");
	
    // Test code
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
	  alert("yay! it worked");
	});
	
});