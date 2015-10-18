spec(function() {

	var queries = {
		android: {
			sharedButtonsButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Shared Buttons' } },
			button1: { 'class':'android.widget.Button', 'properties': { 'text': 'Button 1' } },
		}
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'android' : [
				android.launch('com.telerik.demoapplication')
			]
		},
		'And is on the buttons demos': {
			'android' : [
				android.tap(queries.android.sharedButtonsButton),
				android.wait(1000),
			]
		},
		'Verify button 1 exists': {
			'android' : [
				android.elementExists(queries.android.button1, function(exists) {
					assert(exists).equals(true);
				})
			]
		},
		'Verify button 1 is visible': {
			'android' : [
				android.elementVisible(queries.android.button1, function(isVisible) {
					assert(isVisible).equals(true);
				})
			]
		}
	};

	describe("Verify element exists and is visible", function() {
		test("Verify element exists and is visible", function() {
			step('Given DemoApplication is running');
			step('And is on the buttons demos');
			step('Verify button 1 exists');
			step('Verify button 1 is visible');
		});
	}, stepRepository);
});

