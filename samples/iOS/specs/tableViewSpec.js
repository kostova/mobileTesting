spec(function() {

	var queries = {
		mainMenuTableView: { 'class' : 'UITableView' },
		demoTableView: { 'class': 'UITableView' },
		label: {'class': 'UILabel', 'properties' : { 'text': 'Item 3'} },
		editButton: {'class': 'UIButton', 'properties': { 'currentTitle': 'Edit' } }

	};

	var stepRepository = {
		"Go to tableView demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.scrollToRow(queries.demoTableView, 13, 0, ios.constants.tableViewScrollPosition.top),
				ios.selectRow(queries.demoTableView, 13, 0),
				ios.wait(500),
			]
		},
		"Go to section 3 and select rows": {
			'ios': [
				// TODO: without the previous ios.wait(500), this does not work in iOS 7 because the query finds the previous page's UITableView instead of the current page's
				ios.selectRow(queries.demoTableView, 2, 2),
				ios.selectRow(queries.demoTableView, 3, 2),
				ios.selectRow(queries.demoTableView, 4, 2)
			]
		},
		"Scroll and tap": {
			'ios': [
				ios.scrollToRow(queries.demoTableView, 0, 2, ios.constants.tableViewScrollPosition.top),
				ios.tap(queries.label)
			]
		},
		"Drag cell to different location": {
			'ios': [
				ios.tap(queries.editButton),
				ios.dragCellToIndexPath(queries.demoTableView, 1, 0, 0, 4),
				ios.dragCellToIndexPath(queries.demoTableView, 5, 4, 1, 0),
				ios.dragCellToIndexPath(queries.demoTableView, 0, 1, 0, 2),
				ios.dragCellToIndexPath(queries.demoTableView, 0, 2, 0, 3),
				ios.wait(1000)
			]
		},
		"Swipe and delete cell": {
			'ios': [
				ios.swipe({'class': 'UITableViewCell', 'index': 8}, ios.constants.swipeDirection.left),
				ios.tap({'class': 'UILabel', 'properties': { 'text': 'Delete' } }),
				ios.wait(1000)
			]
		}
	};

	describe("TableView - success", function() {
		test("TableView row selections", function() {
			step("Go to tableView demo");
			step("Go to section 3 and select rows");
		});
		test("TableView scroll and tap", function() {
			step("Go to tableView demo");
			step("Scroll and tap");
		});
		test("TableView drag cell to different location", function() {
			step("Go to tableView demo");
			step("Drag cell to different location");
		});
		test("TableView delete cell", function() {
			step("Go to tableView demo");
			step("Swipe and delete cell");
		});
	}, stepRepository);

});