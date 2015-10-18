spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		tabBar: { 'class': 'UITabBar' },
		label1: { 'class': 'UILabel', 'properties': { 'tag': 1} }
	};

	var stepRepository = {
		"Go to tabBar demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.scrollToRow(queries.tableView, 9, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 9, 0)
			]
		},
		"Select each tabBar button": {
			'ios': [
				ios.tapSubviewAtIndex(queries.tabBar, 3),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Item 4")
				}),
				ios.tapSubviewAtIndex(queries.tabBar, 2),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Item 3")
				}),
				ios.tapSubviewAtIndex(queries.tabBar, 1),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("More")
				}),
				ios.tapSubviewAtIndex(queries.tabBar, 0),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Favorites")
				})
			]
		},
	};

	describe("TabBar - success", function() {
		test("Select each toolbar button", function() {
			step("Go to tabBar demo");
			step("Select each tabBar button");
		});
	}, stepRepository);

});