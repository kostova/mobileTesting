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
		 * Performs a rotate gesture around the center of the view.
		 */
		'Rotate 90 degrees' : {
			'android' : [
				android.wait(1000),
				android.twoFingerRotate(queries.interactiveImage, null, 90),
				android.wait(1000),
				android.twoFingerRotate(queries.interactiveImage, null, -90),
				android.wait(1000),
			]
		},
		/**
		 * Performs a rotate gesture around the center of the view.
		 */
		'Rotate 45 degrees' : {
			'android' : [
				android.wait(1000),
				android.twoFingerRotate(queries.interactiveImage, null, -45),
				android.wait(1000),
				android.twoFingerRotate(queries.interactiveImage, null, 45),
				android.wait(1000),
			]
		},
		/**
		 * Performs a rotate gesture around the center of the view.
		 */
		'Rotate 180 degrees' : {
			'android' : [
				android.wait(1000),
				android.twoFingerRotate(queries.interactiveImage, null, 180),
				android.wait(1000),
				android.twoFingerRotate(queries.interactiveImage, null, -180),
				android.wait(1000),
			]
		},
		/**
		 * Performs a rotate gesture around the center of the view.
		 */
		'Rotate 720 degrees' : {
			'android' : [
				android.wait(1000),
				android.twoFingerRotate(queries.interactiveImage, null, -720),
				android.wait(1000),
				android.twoFingerRotate(queries.interactiveImage, null, 720),
				android.wait(1000),
			]
		}

	};

	describe("Verify rotate gesture works correctly", function() {
		test("Perform rotate gestures", function() {
			step('Given DemoApplication is running');
			step('Go to interactive image demo');
			step('Rotate 90 degrees');
			step('Rotate 45 degrees');
			step('Rotate 180 degrees');
			step('Rotate 720 degrees');
		});
	}, stepRepository);

});