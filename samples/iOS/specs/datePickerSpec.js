spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		datePicker: { 'class': 'UIDatePicker' },
		label: { 'class': 'UILabel', properties: { tag: 5} }
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},
		"Go to datePicker demo": {
			'ios': [
				ios.scrollToRow(queries.tableView, 11, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 11, 0)
			]
		},
		"Simple setDate": {
			'ios': [
				ios.setDate(queries.datePicker, new Date(2012, 6, 24, 9, 45, 32, 1)),
			]
		},
		"Verify selected date":{
			'ios':[
				ios.getPropertyValue(queries.label, 'text', function(value) {
					assert(value).equals("2012-07-24 (09:45:32)");
				})
			]
		}
	};

	describe("Verify datePicker automation functions correctly", function() {
		test("Simple setDate", function() {
			step('Given DemoApplication is running');
			step("Go to datePicker demo");
			step("Simple setDate");
			step("Verify selected date");
		});
	}, stepRepository);

});