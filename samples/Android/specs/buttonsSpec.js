spec(function() {

	var queries = {
		ios: {
			tableView: { 'class': 'UITableView', 'index': 0 },
			button1: { 'class': 'UIButton', 'properties': { 'currentTitle': 'Button 1'} },
			label: { 'class': 'UILabel', 'properties': { 'tag': 1 } }
		},
		android: {
			sharedButtonsButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Shared Buttons' } },
			buttonTestPageButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Button Test Page' } },
			button1: { 'class':'android.widget.Button', 'properties': { 'text': 'Button 1' } },
			textView: {'class':'android.widget.TextView', 'properties': { 'contentDescription':'Last button pressed' } }
		},
		buttonPage: {
			basic: { 'properties': { 'text': 'Button' } },
			
			// These queries demonstrate different ways of searching for a control by id
			checkbox: { 'properties': { 'id': 'checkBox1' } },
			toggle: { 'properties': { 'id': 'id/toggleButton1' } },
			image: { 'properties': { 'id': 'com.telerik.demoapplication:id/imageButton1' } },

			contactBadge: { 'class': 'android.widget.QuickContactBadge' },
			textView: { 'class': 'android.widget.TextView', 'properties': { 'contentDescription': 'Last button tapped' } },
			zoomIn: [ { 'class': 'android.widget.ZoomControls' }, { 'class': 'android.widget.ZoomButton', 'index': 1 } ],
			zoomOut: [ { 'class': 'android.widget.ZoomControls' }, { 'class': 'android.widget.ZoomButton', 'index': 0 } ],
			zoomControls: { 'class': 'android.widget.ZoomControls' }
		}
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('telerikmt10://')
			],
			'android' : [
				android.launch('com.telerik.demoapplication')
			]
		},
		'And is on the buttons demos': {
			'ios': [
				ios.scrollToRow(queries.ios.tableView, 0, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.ios.tableView, 0, 0)
			],
			'android' : [
				android.tap(queries.android.sharedButtonsButton),
				android.wait(2000)
			]
		},
		'When button 1 is tapped': {
			'ios': [
				ios.tap(queries.ios.button1)
			],
			'android' : [
				android.tap(queries.android.button1)
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
				})
			]
		},
		'And is on the Button Test Page': {
			'android': [
				android.tap(queries.android.buttonTestPageButton),
				android.wait(2000)
			]
		},
		'When the basic button is tapped': {
			'android': [
				android.tap(queries.buttonPage.basic)
			]
		},
		'The label updates to show that the basic button was tapped': {
			'android': [
				android.getPropertyValue(queries.buttonPage.textView, 'text', function (labelText) {
					assert(labelText).equals('Button tapped');
				})
			]
		},
		'When the checkbox is tapped': {
			'android': [
				android.tap(queries.buttonPage.checkbox),
				android.wait(1500),
				android.getPropertyValue(queries.buttonPage.checkbox, "checked", function(value) {
					assert(value).equals(true);
				}) 
			]
		},
		'The label updates to show that the checkbox was tapped': {
			'android': [
				android.getPropertyValue(queries.buttonPage.textView, 'text', function (labelText) {
					assert(labelText).equals('CheckBox tapped');
				})
			]
		},
		'When the toggle button is tapped': {
			'android': [
				android.tap(queries.buttonPage.toggle),
				android.wait(1500),
				android.getPropertyValue(queries.buttonPage.toggle, "checked", function(value) {
					assert(value).equals(true);
				})
			]
		},
		'The label updates to show that the toggle button was tapped': {
			'android': [
				android.getPropertyValue(queries.buttonPage.textView, 'text', function (labelText) {
					assert(labelText).equals('ToggleButton tapped');
				})
			]
		},
		'When the image button is tapped': {
			'android': [
				android.tap(queries.buttonPage.image)
			]
		},
		'The label updates to show that the image button was tapped': {
			'android': [
				android.getPropertyValue(queries.buttonPage.textView, 'text', function (labelText) {
					assert(labelText).equals('ImageButton tapped');
				})
			]
		},
		'When the contact button is tapped': {
			'android': [
				android.tap(queries.buttonPage.contactBadge)
			]
		},
		'The label updates to show that the contact button was tapped': {
			'android': [
				android.getPropertyValue(queries.buttonPage.textView, 'text', function (labelText) {
					assert(labelText).equals('QuickContactBadge tapped');
				})
			]
		},
		'When zoom in button is tapped': {
			'android': [
				android.tap(queries.buttonPage.zoomIn)
			]
		},
		'The label updates to show that the zoom in button was tapped': {
			'android': [
				android.getPropertyValue(queries.buttonPage.textView, 'text', function (labelText) {
					assert(labelText).equals('Zoom in tapped');
				})
			]
		},
		'When zoom out button is tapped': {
			'android': [
				android.tap(queries.buttonPage.zoomOut)
			]
		},
		'The label updates to show that the zoom out button was tapped': {
			'android': [
				android.getPropertyValue(queries.buttonPage.textView, 'text', function (labelText) {
					assert(labelText).equals('Zoom out tapped');
				})
			]
		},
		'The CheckBox is unchecked': {
			'android': [
				android.getPropertyValue(queries.buttonPage.checkbox, 'checked', function (isChecked) {
					assert(isChecked).equals(false);
				})
			]
		},
		'The CheckBox is checked': {
			'android': [
				android.getPropertyValue(queries.buttonPage.checkbox, 'checked', function (isChecked) {
					assert(isChecked).equals(true);
				})
			]
		},
		'The ToggleButton is off': {
			'android': [
				android.getPropertyValue(queries.buttonPage.toggle, 'checked', function (isChecked) {
					assert(isChecked).equals(false);
				})
			]
		},
		'The ToggleButton is on': {
			'android': [
				android.getPropertyValue(queries.buttonPage.toggle, 'checked', function (isChecked) {
					assert(isChecked).equals(true);
				})
			]
		},
		'After toggling the CheckBox and ToggleButton on': {
			'android': [
				android.toggle(queries.buttonPage.checkbox, true),
				android.toggle(queries.buttonPage.toggle, true)
			]
		},
		'After toggling the CheckBox and ToggleButton off': {
			'android': [
				android.toggle(queries.buttonPage.checkbox, false),
				android.toggle(queries.buttonPage.toggle, false)
			]
		},
		'When the user zooms in': {
			'android': [
				android.zoomIn(queries.buttonPage.zoomControls),
				android.wait(2000)
			]
		},
		'When the user zooms out': {
			'android': [
				android.zoomOut(queries.buttonPage.zoomControls),
				android.wait(2000)
			]
		}
	};

	describe("Verify button automation functions correctly", function() {
		test("Button 1 should update label with Button Tapped: Button 1", function() {
			step('Given DemoApplication is running');
			step('And is on the buttons demos');
			step('When button 1 is tapped');
			step('Then the label should update to Button Tapped: Button 1');
		});

		test("Verify button behavior", function () {
			step('Given DemoApplication is running');
			step('And is on the Button Test Page');
			step('When the basic button is tapped');
			step('The label updates to show that the basic button was tapped');
			step('When the checkbox is tapped');
			step('The label updates to show that the checkbox was tapped');
			step('When the toggle button is tapped');
			step('The label updates to show that the toggle button was tapped');
			step('When the image button is tapped');
			step('The label updates to show that the image button was tapped');
			step('When the contact button is tapped');
			step('The label updates to show that the contact button was tapped');
			step('When zoom in button is tapped');
			step('The label updates to show that the zoom in button was tapped');
			step('When zoom out button is tapped');
			step('The label updates to show that the zoom out button was tapped');
		});

		test("Verify toggling buttons", function () {
			step('Given DemoApplication is running');
			step('And is on the Button Test Page');
			step('The CheckBox is unchecked');
			step('The ToggleButton is off');
			step('After toggling the CheckBox and ToggleButton on');
			step('The CheckBox is checked');
			step('The ToggleButton is on');
			step('After toggling the CheckBox and ToggleButton off');
			step('The CheckBox is unchecked');
			step('The ToggleButton is off');
		});

		test("Verify zoom API", function () {
			step('Given DemoApplication is running');
			step('And is on the Button Test Page');
			step('When the user zooms in');
			step('The label updates to show that the zoom in button was tapped');
			step('When the user zooms out');
			step('The label updates to show that the zoom out button was tapped');
		});
	}, stepRepository);

});

