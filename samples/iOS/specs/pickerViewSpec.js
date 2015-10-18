spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		pickerView: { 'class': 'UIPickerView' },
		label1: { 'class': 'UILabel', 'properties':{'tag':1} },
		label2: { 'class': 'UILabel', 'properties':{'tag':2} }
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},
		"Go to pickerView demo": {
			'ios': [
				ios.scrollToRow(queries.tableView, 12, 0, ios.constants.tableViewScrollPosition.top),
				ios.selectRow(queries.tableView, 12, 0)
			]
		},
		"Select rows in both components": {
			'ios': [
				ios.selectRowInComponent(queries.pickerView, 1, 0),
				ios.selectRowInComponent(queries.pickerView, 2, 1)
			]
		},
		"Verify selected rows":{
			'ios':[
				ios.getPropertyValue(queries.label1,'text',function(value){
					assert(value).equals("Hey");
				}),
				ios.getPropertyValue(queries.label2,'text',function(value){
					assert(value).equals("Universe");
				})
			]
		}
	};

	describe("Verify pickerView automation functions correctly", function() {
		test("Select rows in both components", function() {
			step('Given DemoApplication is running');
			step("Go to pickerView demo");
			step("Select rows in both components");
			step("Verify selected rows");
		});
	}, stepRepository);

});