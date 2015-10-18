spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		switch1: { 'class': 'UISwitch' }
	};

	var successStepDefinitions = {
		"Go to switch demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.scrollToRow(queries.tableView, 2, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 2, 0)
			]
		},
		"Switch off on off on": {
			'ios': [
				ios.toggle(queries.switch1, false),
				ios.toggle(queries.switch1, true),
				ios.toggle(queries.switch1, false),
				ios.toggle(queries.switch1, true)
			]
		}
	};

	describe("Toggle on/off - success", function() {
		test("Toggle on/off", function() {
			step("Go to switch demo"); 
			step("Switch off on off on");
		});
	}, successStepDefinitions);

});