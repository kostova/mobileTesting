spec(function() {

	var queries = {
		textField1: { 'class': 'UITextField', 'properties' : { 'tag': '1'} },
		textField2: { 'class': 'UITextField', 'properties' : { 'tag': '2'} },
		label1: { 'class': 'UILabel', 'properties' : { 'text': 'UITextField' } }
	};

	var stepRepository = {
		"Go to textField demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.tap(queries.label1)
			]
		},
		"Verify empty values":{
			'ios':[
				ios.getPropertyValue( queries.textField1, "text", function(value) {
					assert(value).equals("");
				}),
				ios.getPropertyValue( queries.textField2, "text", function(value) {
					assert(value).equals("");
				})
			]
		},
		"Using setText": {
			'ios': [
				ios.setText( queries.textField1, "text 1"),
				ios.setText( queries.textField2, "text 2")
			]
		},
		"Verify set values":{
			'ios':[
				ios.getPropertyValue( queries.textField1, "text", function(value) {
					assert(value).equals("text 1");
				}),
				ios.getPropertyValue( queries.textField2, "text", function(value) {
					assert(value).equals("text 2");
				})
			]
		}
	};

	describe("TextField - success", function() {
		test("TextField changes", function() {
			step("Go to textField demo");
			step("Verify empty values");
			step("Using setText");
			step("Verify set values");
		});
	}, stepRepository);

});