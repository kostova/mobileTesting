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
		 * Performs a rotate gesture around the center of the view.
		 */
		'Rotate 90 degrees' : {
			'ios' : [
				ios.wait(1000),
				ios.twoFingerRotate(queries.parentView, null, 90),
				ios.wait(1000),
				ios.twoFingerRotate(queries.parentView, null, -90),
				ios.wait(1000),
			]
		},
		/**
		 * Performs a rotate gesture around the center of the view.
		 */
		'Rotate 45 degrees' : {
			'ios' : [
				ios.wait(1000),
				ios.twoFingerRotate(queries.parentView, null, -45),
				ios.wait(1000),
				ios.twoFingerRotate(queries.parentView, null, 45),
				ios.wait(1000),
			]
		},
		/**
		 * Performs a rotate gesture around the center of the view.
		 */
		'Rotate 180 degrees' : {
			'ios' : [
				ios.wait(1000),
				ios.twoFingerRotate(queries.parentView, null, 180),
				ios.wait(1000),
				ios.twoFingerRotate(queries.parentView, null, -180),
				ios.wait(1000),
			]
		},
		/**
		 * Performs a rotate gesture around the center of the view.
		 */
		'Rotate 720 degrees' : {
			'ios' : [
				ios.wait(1000),
				ios.twoFingerRotate(queries.parentView, null, -720),
				ios.wait(1000),
				ios.twoFingerRotate(queries.parentView, null, 720),
				ios.wait(1000),
			]
		}

	};

	describe("Verify rotate gesture works correctly", function() {
		test("Perform rotate gestures", function() {
			step('Given DemoApplication is running');
			step('Go to UIImageView demo');
			step('Rotate 90 degrees');
			step('Rotate 45 degrees');
			step('Rotate 180 degrees');
			step('Rotate 720 degrees');
		});
	}, stepRepository);

});