spec(function() {
	
	var queries = {
		dragZoomRotateButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Drag, Zoom and Rotate' } },
		interactiveImage: { 'class': 'com.telerik.demoapplication.InteractiveImage' },
		layout: { 'class': 'android.widget.LinearLayout' }
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'android': [
				android.launch('com.telerik.demoapplication')
			]
		},
		'Go to interactive image demo': {
			'android': [
				android.swipe(queries.layout, android.constants.swipeDirection.up),
				android.swipe(queries.layout, android.constants.swipeDirection.up),
				android.tap(queries.dragZoomRotateButton),
			]
		},
		/**
		 * Performs a swipe gesture in all directions
		 */
		'Swipe in all directions' : {
			'android' : [
				android.wait(1000),
				android.swipe(queries.interactiveImage, android.constants.swipeDirection.left),
				android.wait(1000),
				android.swipe(queries.interactiveImage, android.constants.swipeDirection.right),
				android.wait(1000),
				android.swipe(queries.interactiveImage, android.constants.swipeDirection.up),
				android.wait(1000),
				android.swipe(queries.interactiveImage, android.constants.swipeDirection.down),
				android.wait(1000),
			]
		},
	};

	describe("Verify swipe gesture works correctly", function() {
		test("Perform swipe gestures", function() {
			step('Given DemoApplication is running');
			step('Go to interactive image demo');
			step('Swipe in all directions');
		});
	}, stepRepository);

});