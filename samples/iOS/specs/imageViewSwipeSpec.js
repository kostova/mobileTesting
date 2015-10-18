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
		 * Performs a swipe gesture in all directions
		 */
		'Swipe in all directions' : {
			'ios' : [
				ios.wait(1000),
				ios.swipe(queries.parentView, ios.constants.swipeDirection.left),
				ios.wait(1000),
				ios.swipe(queries.parentView, ios.constants.swipeDirection.right),
				ios.wait(1000),
				ios.swipe(queries.parentView, ios.constants.swipeDirection.up),
				ios.wait(1000),
				ios.swipe(queries.parentView, ios.constants.swipeDirection.down),
				ios.wait(1000),
			]
		},
	};

	describe("Verify swipe gesture works correctly", function() {
		test("Perform swipe gestures", function() {
			step('Given DemoApplication is running');
			step('Go to UIImageView demo');
			step('Swipe in all directions');
		});
	}, stepRepository);

});