spec(function() {

	var queries = {
		sharedButtonsButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Shared Buttons' } },
		button1: { 'class':'android.widget.Button', 'properties': { 'text': 'Button 1' } }
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'android' : [
				android.launch('com.telerik.demoapplication')
			]
		},
		'And is on the buttons demos': {
			'android' : [
				android.tap(queries.sharedButtonsButton)
			]
		},
		'Wait for button 1': {
			'android' : [
				android.waitForElementExists(queries.button1, true, 500, 2000),
				android.waitForElementVisible(queries.button1, true, 500, 2000),
				android.waitForPropertyValue(queries.button1, "text", "Button 1", 500, 2000)
			]
		}
	};

	describe("Wait for element", function() {
		test("Wait for Button 1", function() {
			step('Given DemoApplication is running');
			step('And is on the buttons demos');
			step('Wait for button 1');
		});
	}, stepRepository);

});

