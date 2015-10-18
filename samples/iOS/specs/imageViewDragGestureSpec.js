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
		'Drag left and right with points' : {
			'ios' : [
				ios.wait(1000),
				ios.dragToPoint(queries.parentView, {'x': 200, 'y': 200}, { 'x': 100, 'y': 200 }, 60),
				ios.wait(1000),
				ios.dragToPoint(queries.parentView, {'x': 200, 'y': 200}, { 'x': 300, 'y': 200 }, 60),
				ios.wait(1000),
			]
		},
		/**
		 * Specifying -1 in a parameter of the toPoint results in that parameter being set
		 * to the original value of the equivilant parameter in the fromPoint.
		 */
		'Drag left and right with negative point values' : {
			'ios' : [
				ios.wait(1000),
				ios.dragToPoint(queries.parentView, {'x': 200, 'y': 200}, { 'x': 100, 'y': -1 }, 60),
				ios.wait(1000),
				ios.dragToPoint(queries.parentView, {'x': 200, 'y': 200}, { 'x': 300, 'y': -1 }, 60),
				ios.wait(1000),
			]
		},
		/**
		 * Specifying null for the fromPoint automatically uses the center of the view.
		 */
		'Drag left and right with displacement from center point' : {
			'ios' : [
				ios.wait(1000),
				ios.dragToDisplacement(queries.parentView, null, { 'x': -200, 'y': 0 }, 60),
				ios.wait(1000),
				ios.dragToDisplacement(queries.parentView, null, { 'x': 200, 'y': 0 }, 60),
				ios.wait(1000),
			]
		}
	};

	describe("Verify drag gestures work correctly", function() {
		test("Perform drag left and right with points", function() {
			step('Given DemoApplication is running');
			step('Go to UIImageView demo');
			step('Drag left and right with points');
		});
		test("Perform drag left and right with negative point values", function() {
			step('Given DemoApplication is running');
			step('Go to UIImageView demo');
			step('Drag left and right with negative point values');
		});
		test("Perform drag left and right with displacement from center point", function() {
			step('Given DemoApplication is running');
			step('Go to UIImageView demo');
			step('Drag left and right with displacement from center point');
		});
	}, stepRepository);

});