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
		'Drag left and right with points' : {
			'android' : [
				android.wait(1000),
				android.dragToPoint(queries.interactiveImage, {'x': 200, 'y': 200}, { 'x': 100, 'y': 200 }, 60),
				android.wait(1000),
				android.dragToPoint(queries.interactiveImage, {'x': 200, 'y': 200}, { 'x': 300, 'y': 200 }, 60),
				android.wait(1000),
			]
		},
		/**
		 * Specifying -1 in a parameter of the toPoint results in that parameter being set
		 * to the original value of the equivilant parameter in the fromPoint.
		 */
		'Drag left and right with negative point values' : {
			'android' : [
				android.wait(1000),
				android.dragToPoint(queries.interactiveImage, {'x': 200, 'y': 10}, { 'x': 100, 'y': -1 }, 60),
				android.wait(1000),
				android.dragToPoint(queries.interactiveImage, {'x': 200, 'y': 10}, { 'x': 300, 'y': -1 }, 60),
				android.wait(1000),
			]
		},
		/**
		 * Specifying null for the fromPoint automatically uses the center of the view.
		 */
		'Drag left and right with displacement from center point' : {
			'android' : [
				android.wait(1000),
				android.dragToDisplacement(queries.interactiveImage, null, { 'x': -200, 'y': 0 }, 60),
				android.wait(1000),
				android.dragToDisplacement(queries.interactiveImage, null, { 'x': 200, 'y': 0 }, 60),
				android.wait(1000),
			]
		}
	};

	describe("Verify drag gestures work correctly", function() {
		test("Perform drag left and right with points", function() {
			step('Given DemoApplication is running');
			step('Go to interactive image demo');
			step('Drag left and right with points');
		});
		test("Perform drag left and right with negative point values", function() {
			step('Given DemoApplication is running');
			step('Go to interactive image demo');
			step('Drag left and right with negative point values');
		});
		test("Perform drag left and right with displacement from center point", function() {
			step('Given DemoApplication is running');
			step('Go to interactive image demo');
			step('Drag left and right with displacement from center point');
		});
	}, stepRepository);

});
