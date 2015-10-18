spec(function () {
	var queries = {
		selectionControls: { class: 'android.widget.Button', properties: { 'text': 'Selection Controls' } },
		listView: { class: 'android.widget.ListView' },
		feedback: { class: 'android.widget.TextView', properties: { 'contentDescription': 'Last item selected' } },
		spinner: { class: 'android.widget.Spinner' },
		gridView: { class: 'android.widget.GridView' }
	};

	var stepRepository = {
		"Load selection screen": {
			'android': [
				android.launch('com.telerik.demoapplication'),
				android.tap(queries.selectionControls)
			]
		},
		"Select Saturn in list": {
			'android': [
				android.selectRow(queries.listView, 5)
			]
		},
		"Verify Saturn was selected": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals('Selected Saturn in list view');
				})
			]
		},
		"Select Pluto in list": {
			'android': [
				android.selectRow(queries.listView, 8)
			]
		},
		"Verify Pluto was selected": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals('Selected Pluto in list view');
				})
			]
		},
		"Select Mars in spinner": {
			'android': [
				android.selectRow(queries.spinner, 3)
			]
		},
		"Verify Mars was selected in spinner": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals('Selected Mars in spinner');
				})
			]
		},
		"Select Earth in grid": {
			'android': [
				android.selectRow(queries.gridView, 2)
			]
		},
		"Verify Earth was selected in grid": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals('Selected Earth in grid view');
				})
			]
		}
	};

	describe("Test selection automation", function () {
		test("Exercise ListView", function () {
			step("Load selection screen");
			step("Select Saturn in list");
			step("Verify Saturn was selected");
			// Select Pluto to verify that we can handle scrolling list views
			step("Select Pluto in list");
			step("Verify Pluto was selected");
		});

		test("Exercise Spinner", function () {
			step("Load selection screen");
			step("Select Mars in spinner");
			step("Verify Mars was selected in spinner");
		});

		test("Exercise GridView", function () {
			step("Load selection screen");
			step("Select Earth in grid");
			step("Verify Earth was selected in grid");
		});
	}, stepRepository);
});