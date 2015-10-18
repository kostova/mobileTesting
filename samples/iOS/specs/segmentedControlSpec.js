spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		firstSegmentedControl: { 'class': 'UISegmentedControl', 'properties' : { 'tag': 1 } },
		secondSegmentedControl: { 'class': 'UISegmentedControl', 'properties' : { 'tag': 2 } },
		thirdSegmentedControl: { 'class': 'UISegmentedControl', 'properties' : { 'tag': 3 } }
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},
		"Go to segmentedControl demo": {
			'ios': [
				ios.scrollToRow(queries.tableView, 7, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 7, 0)
			]
		},
		"Select all segments": {
			'ios': [
				ios.tapSubviewAtIndex(queries.firstSegmentedControl, 1),
				ios.tapSubviewAtIndex(queries.secondSegmentedControl, 1),
				ios.tapSubviewAtIndex(queries.secondSegmentedControl, 2),
				ios.tapSubviewAtIndex(queries.secondSegmentedControl, 3),
				ios.tapSubviewAtIndex(queries.secondSegmentedControl, 4),
				ios.tapSubviewAtIndex(queries.secondSegmentedControl, 5),
				ios.tapSubviewAtIndex(queries.secondSegmentedControl, 6),
				ios.tapSubviewAtIndex(queries.secondSegmentedControl, 7),
				ios.tapSubviewAtIndex(queries.thirdSegmentedControl, 1),
				ios.tapSubviewAtIndex(queries.thirdSegmentedControl, 2)
			]
		},
	};

	describe("SegmentedControl - success", function() {
		test("Select all segments", function() {
			step('Given DemoApplication is running');
			step("Go to segmentedControl demo");
			step("Select all segments");
		});
	}, stepRepository);

});