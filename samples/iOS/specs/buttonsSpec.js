spec(function() {

	var queries = {
		ios: {
			tableView: { 'class': 'UITableView', 'index': 0 },
			button1: { 'class': 'UIButton', 'properties': { 'currentTitle': 'Button 1'} },
			buttonInfoLight: { 'class': 'UIButton', 'properties': { 'tag': 3 } },
			buttonInfoDark: { 'class': 'UIButton', 'properties': { 'tag': 4 } },
			buttonDetailDisclosure: { 'class': 'UIButton', 'properties': { 'tag': 5 } },
			buttonContactAdd: { 'class': 'UIButton', 'properties': { 'tag': 6 } },
			label: { 'class': 'UILabel', 'properties': { 'tag': 1 } }
		},
		android: {
			sharedButtonsButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Shared Buttons'} },
			button1: { 'class':'android.widget.Button', 'properties': { 'text': 'Button 1'} },
			textView: {'class':'android.widget.TextView', 'properties': { 'contentDescription':'Last button pressed'} }
		}
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			],
			'android' : [
				android.launch('com.telerik.demoapplication'),
				android.wait(1000)
			]
		},
		'And is on the buttons demos': {
			'ios': [
				ios.scrollToRow(queries.ios.tableView, 0, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.ios.tableView, 0, 0)
			],
			'android' : [
				android.tap(queries.android.sharedButtonsButton),
				android.wait(1000)
			]
		},
		'When button 1 is tapped': {
			'ios': [
				ios.tap(queries.ios.button1)
			],
			'android' : [
				android.tap(queries.android.button1),
				android.wait(1000)
			]
		},
		'Then the label should update to Button Tapped: Button 1': {
			'ios': [
				ios.getPropertyValue(queries.ios.label, 'text', function(value) {
					assert(value).equals("Button Tapped: Button 1");
				})
			],
			'android': [
				android.getPropertyValue(queries.android.textView, 'text', function(labelText) {
					assert(labelText).equals('Button Tapped: Button 1');
				}),
				android.wait(1000)
			]
		},
		'When button Info Light is tapped': {
			'ios': [
				ios.tap(queries.ios.buttonInfoLight)
			]
		},
		'Then the label should update to Button Tapped: UIButtonTypeInfoLight': {
			'ios': [
				ios.getPropertyValue(queries.ios.label, 'text', function(value) {
					assert(value).equals("Button Tapped: UIButtonTypeInfoLight");
				})
			]
		},
		'When button Info Dark is tapped': {
			'ios': [
				ios.tap(queries.ios.buttonInfoDark)
			]
		},
		'Then the label should update to Button Tapped: UIButtonTypeInfoDark': {
			'ios': [
				ios.getPropertyValue(queries.ios.label, 'text', function(value) {
					assert(value).equals("Button Tapped: UIButtonTypeInfoDark");
				})
			]
		},
		'When button Detail Disclosure is tapped': {
			'ios': [
				ios.tap(queries.ios.buttonDetailDisclosure)
			]
		},
		'Then the label should update to Button Tapped: UIButtonTypeDetailDisclosure': {
			'ios': [
				ios.getPropertyValue(queries.ios.label, 'text', function(value) {
					assert(value).equals("Button Tapped: UIButtonTypeDetailDisclosure");
				})
			]
		},
		'When button Contact Add is tapped': {
			'ios': [
				ios.tap(queries.ios.buttonContactAdd)
			]
		},
		'Then the label should update to Button Tapped: UIButtonTypeContactAdd': {
			'ios': [
				ios.getPropertyValue(queries.ios.label, 'text', function(value) {
					assert(value).equals("Button Tapped: UIButtonTypeContactAdd");
				})
			]
		}
	};

	describe("Verify button automation functions correctly", function() {
		test("Button 1 should update label with Button Tapped: Button 1", function() {
			step('Given DemoApplication is running');
			step('And is on the buttons demos');
			step('When button 1 is tapped');
			step('Then the label should update to Button Tapped: Button 1');
			step('When button Info Light is tapped');
			step('Then the label should update to Button Tapped: UIButtonTypeInfoLight');
			step('When button Info Dark is tapped');
			step('Then the label should update to Button Tapped: UIButtonTypeInfoDark');
			step('When button Detail Disclosure is tapped');
			step('Then the label should update to Button Tapped: UIButtonTypeDetailDisclosure');
			step('When button Contact Add is tapped');
			step('Then the label should update to Button Tapped: UIButtonTypeContactAdd');
		});
	}, stepRepository);

});

