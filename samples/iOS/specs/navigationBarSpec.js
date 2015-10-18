spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView', 'index': 0 },
		navigationBar: {'class': 'UINavigationBar' },
		aboutButton: {'class': 'UINavigationButton', 'index': 0, 'properties': { 'tag': '0' }}
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},
		'And is on the buttons demos': {
			'ios': [
				ios.scrollToRow(queries.tableView, 0, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 0, 0)
			]
		},
		'And the back button is tapped': {
			'ios': [
				ios.tapCenterLeft(queries.navigationBar)
			]
		},
		'The main menu screen should be displayed': {
			'ios': [
				// verify we are on the main screen by using the 'about' button as a reference point
				ios.getPropertyValue(queries.aboutButton, 'currentTitle', function(value) {
					assert(value).equals("About");
				})
			]
		}
	};

	describe("Verify navigation bar back button functions correctly", function() {
		test("Button 1 should update label with Button Tapped: Button 1", function() {
			step('Given DemoApplication is running');
			step('And is on the buttons demos');
			step('And the back button is tapped');
			step('The main menu screen should be displayed');
		});
	}, stepRepository);

});