spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		stepper1: { 'class': 'UIStepper', 'properties' : { 'tag': '1'} },
		stepper2: { 'class': 'UIStepper', 'properties' : { 'tag': '2'} },
		stepper3: { 'class': 'UIStepper', 'properties' : { 'tag': '3'} },
		stepper4: { 'class': 'UIStepper', 'properties' : { 'tag': '4'} },
		label1: { 'class': 'UILabel', 'properties' : { 'tag': '5'} },
		label2: { 'class': 'UILabel', 'properties' : { 'tag': '6'} },
		label3: { 'class': 'UILabel', 'properties' : { 'tag': '7'} },
		label4: { 'class': 'UILabel', 'properties' : { 'tag': '8'} }
	};

	var stepRepository = {
		"Go to stepper demo": {
			'ios': [
				ios.launch('tsdemoapplication://'),
				ios.scrollToRow(queries.tableView, 3, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 3, 0)
			]
		},
		"Single up up down down": {
			'ios': [
				ios.tapCenterRight(queries.stepper1),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Value: 0.5");
				}),
				ios.tapCenterRight(queries.stepper1),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Value: 1.0");
				}),
				ios.tapCenterLeft(queries.stepper1),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Value: 0.5");
				}),
				ios.tapCenterLeft(queries.stepper1),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Value: 0.0");
				})
			]
		},
		"All up down": {
			'ios': [
				ios.tapCenterRight(queries.stepper1),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Value: 0.5");
				}),
				ios.tapCenterRight(queries.stepper2),
				ios.getPropertyValue(queries.label2,'text',function(value){
					assert(value).equals("Value: 1.0");
				}),
				ios.tapCenterRight(queries.stepper3),
				ios.getPropertyValue(queries.label3,'text',function(value){
					assert(value).equals("Value: 1.5");
				}),
				ios.tapCenterRight(queries.stepper4),
				ios.getPropertyValue(queries.label4,'text',function(value){
					assert(value).equals("Value: 2.0");
				}),
				ios.tapCenterLeft(queries.stepper4),
				ios.getPropertyValue(queries.label4,'text',function(value){
					assert(value).equals("Value: 0.0");
				}),
				ios.tapCenterLeft(queries.stepper3),
				ios.getPropertyValue(queries.label3,'text',function(value){
					assert(value).equals("Value: 0.0");
				}),
				ios.tapCenterLeft(queries.stepper2),
				ios.getPropertyValue(queries.label2,'text',function(value){
					assert(value).equals("Value: 0.0");
				}),
				ios.tapCenterLeft(queries.stepper1),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Value: 0.0");
				})
			]
		},
		"Using setValue": {
			'ios': [
				ios.setValue(queries.stepper1, 17.25, 40000),
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Value: 17.5");
				}),
			]
		}
	};

	describe("Stepper - success", function() {
		test("Single stepper", function() {
			step("Go to stepper demo");
			step("Single up up down down");
		});
		test("Multi stepper", function() {
			step("Go to stepper demo");
			step("All up down");
		});
		test("Using range.setValue", function() {
			step("Go to stepper demo");
			step("Using setValue");
		});
	}, stepRepository);

});