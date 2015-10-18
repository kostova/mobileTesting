spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		parentView: { 'class': 'UIView', properties: {'tag': 2 } }
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},
		'Go to UIImageView demo': {
			'ios': [
				ios.scrollToRow(queries.tableView, 17, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 17, 0)
			]
		},
		/**
		 * Performs a pinch in and out around the center of the view. 
		 * Uses an approximated distance from the center of the view 
		 * to its edge. Uses a default of 3 steps. 
		 */
		'Pinch in and out' : {
			'ios' : [
				ios.wait(1000),
				ios.pinchIn(queries.parentView),
				ios.wait(1000),
				ios.pinchOut(queries.parentView),
				ios.wait(1000)
			]
		},
		/**
		 * Performs a pinch in and out around the center of
		 * the view. Uses an approximated distance from the point 
		 * to the edge of the view. Uses a default of 3 steps. 
		 */
		'Pinch in and out with center' : {
			'ios' : [
				ios.wait(1000),
				ios.pinchIn(queries.parentView, null),
				ios.wait(1000),
				ios.pinchOut(queries.parentView, null),
				ios.wait(1000)
			]
		},
		/**
		 * Performs a pinch in and out around the center of the view. 
		 * Pinch in starts around the point at the specified distance. 
		 * Pinch out ends at the specified distance from the point. 
		 * Uses a default of 3 steps.
		 */
		'Pinch in and out with center, and distance' : {
			'ios' : [
				ios.wait(1000),
				ios.pinchIn(queries.parentView, null, 100),
				ios.wait(1000),
				ios.pinchOut(queries.parentView, null, 100),
				ios.wait(1000)
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
			'ios' : [
				ios.wait(1000),
				ios.pinchIn(queries.parentView, { x: 200, y: 200 }, 60, 30),
				ios.wait(1000),
				ios.pinchOut(queries.parentView, { x: 200, y: 200 }, 60, 30),
				ios.wait(1000)
			]
		}
	};

	describe("Verify pinch in and out gestures work correctly", function() {
		test("Perform pinch in and out gestures with default values", function() {
			step('Given DemoApplication is running');
			step('Go to UIImageView demo');
			step('Pinch in and out');
		});
		test("Perform pinch in and out gestures with center", function() {
			step('Given DemoApplication is running');
			step('Go to UIImageView demo');
			step('Pinch in and out with center');
		});
		test("Perform pinch in and out gestures with center, and distance", function() {
			step('Given DemoApplication is running');
			step('Go to UIImageView demo');
			step('Pinch in and out with center, and distance');
		});
		test("Perform pinch in and out gestures with point, distance, and steps", function() {
			step('Given DemoApplication is running');
			step('Go to UIImageView demo');
			step('Pinch in and out with point, distance, and steps');
		});
	}, stepRepository);

});