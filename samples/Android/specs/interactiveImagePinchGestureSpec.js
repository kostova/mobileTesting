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
		 * Performs a pinch in and out around the center of the view. 
		 * Uses an approximated distance from the center of the view 
		 * to its edge. Uses a default of 3 steps. 
		 */
		'Pinch in and out' : {
			'android' : [
				android.wait(1000),
				android.pinchIn(queries.interactiveImage),
				android.wait(1000),
				android.pinchOut(queries.interactiveImage),
				android.wait(1000)
			]
		},
		/**
		 * Performs a pinch in and out around the center of
		 * the view. Uses an approximated distance from the point 
		 * to the edge of the view. Uses a default of 3 steps. 
		 */
		'Pinch in and out with center' : {
			'android' : [
				android.wait(1000),
				android.pinchIn(queries.interactiveImage, null),
				android.wait(1000),
				android.pinchOut(queries.interactiveImage, null),
				android.wait(1000)
			]
		},
		/**
		 * Performs a pinch in and out around the center of the view. 
		 * Pinch in starts around the point at the specified distance. 
		 * Pinch out ends at the specified distance from the point. 
		 * Uses a default of 3 steps.
		 */
		'Pinch in and out with center, and distance' : {
			'android' : [
				android.wait(1000),
				android.pinchIn(queries.interactiveImage, null, 100),
				android.wait(1000),
				android.pinchOut(queries.interactiveImage, null, 100),
				android.wait(1000)
			]
		},
		/**
		 * Performs a pinch in and out around the specified point in the view. 
		 * Pinch in starts around the point at the specified distance. 
		 * Pinch out ends at the specified distance from the point. 
		 * Two touches, one for each finger involved in the pinch, are
		 * generated for each step. 
		 */
		'Pinch in and out with point, distance, and steps' : {
			'android' : [
				android.wait(1000),
				android.pinchIn(queries.interactiveImage, { x: 200, y: 200 }, 120, 60),
				android.wait(1000),
				android.pinchOut(queries.interactiveImage, { x: 200, y: 200 }, 120, 60),
				android.wait(1000)
			]
		}
	};

	describe("Verify pinch in and out gestures work correctly", function() {
		test("Perform pinch in and out gestures with default values", function() {
			step('Given DemoApplication is running');
			step('Go to interactive image demo');
			step('Pinch in and out');
		});
		test("Perform pinch in and out gestures with center", function() {
			step('Given DemoApplication is running');
			step('Go to interactive image demo');
			step('Pinch in and out with center');
		});
		test("Perform pinch in and out gestures with center, and distance", function() {
			step('Given DemoApplication is running');
			step('Go to interactive image demo');
			step('Pinch in and out with center, and distance');
		});
		test("Perform pinch in and out gestures with point, distance, and steps", function() {
			step('Given DemoApplication is running');
			step('Go to interactive image demo');
			step('Pinch in and out with point, distance, and steps');
		});
	}, stepRepository);

});