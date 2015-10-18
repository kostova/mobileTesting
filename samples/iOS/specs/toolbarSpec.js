spec(function() {

	var queries = {
		toolBar1: { 'class': 'UIToolbar' },
		label: { 'class': 'UILabel', 'properties' : { 'text': 'UIToolbar' } },
		label1: { 'class': 'UILabel', 'properties' : { 'tag': 1 } }
	};

	var stepRepository = {
		"Go to toolbar demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.tap(queries.label)
			]
		},
		"Select each toolbar button": {
			'ios': [
				ios.tapSubviewAtIndex(queries.toolBar1, 6),
				ios.getPropertyValue(queries.label1, "text", function(value){
					assert(value).equals("Item 4");
				}),
				ios.tapSubviewAtIndex(queries.toolBar1, 4),
				ios.getPropertyValue(queries.label1, "text", function(value){
					assert(value).equals("Item 3");
				}),
				ios.tapSubviewAtIndex(queries.toolBar1, 2),
				ios.getPropertyValue(queries.label1, "text", function(value){
					assert(value).equals("Item 2");
				}),
				ios.tapSubviewAtIndex(queries.toolBar1, 0),
				ios.getPropertyValue(queries.label1, "text", function(value){
					assert(value).equals("Item 1");
				})
			]
		}
	};

	describe("ToolBar - success", function() {
		test("Select each toolbar button", function() {
			step("Go to toolbar demo");
			step("Select each toolbar button");
		});
	}, stepRepository);

});