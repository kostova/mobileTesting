spec(function() {

	var queries = {
		textView1: { 'class': 'UITextView' },
		label1: { 'class': 'UILabel', 'properties' : { 'text': 'UITextView' } }
	};

	var stepRepository = {
		"Go to textView demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.tap(queries.label1)
			]
		},
		"Using setText": {
			'ios': [
				ios.setText(queries.textView1, "Hello, world!"),
				ios.getPropertyValue(queries.textView1, "text", function(value){
					assert(value).equals("Hello, world!");
				})
			]
		},
		"Using typeText and keys": {
			'ios': [
				ios.typeText(queries.textView1, "Hello, world!", 100),
				ios.getPropertyValue(queries.textView1, "text", function(value){
					assert(value).equals("Hello, world!");
				}),
				ios.pressReturn(),
				ios.typeText(queries.textView1, "Good-bye, world!", 100),
				ios.getPropertyValue(queries.textView1, "text", function(value){
					assert(value).equals("Hello, world!\nGood-bye, world!");
				})
			]
		}
	};

	describe("TextView - success", function() {
		test("TextView changes", function() {
			step("Go to textView demo");
			step("Using setText");
		});
		test("TextView typing", function() {
			step("Go to textView demo");
			step("Using typeText and keys");
		});
	}, stepRepository);

});