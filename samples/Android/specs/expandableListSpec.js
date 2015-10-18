spec(function () {

	var queries = {
		expandableListControls: { 'class': 'android.widget.Button', 'properties': { 'text': 'Expandable List' } },
		expandableList: { 'class': 'android.widget.ExpandableListView' },
		feedbackLabel: { 'class': 'android.widget.TextView', 'properties': { 'id': 'feedback' } }
	}

	var stepRepository = {
		"Load expandable list page": {
			'android': [
				android.launch("com.telerik.demoapplication"),
				android.tap(queries.expandableListControls)
			]
		},
		"Select Red in the Colors list": {
			'android': [
				android.selectRow(queries.expandableList, 0, 2)
			]
		},
		"Verify Red was selected": {
			'android': [
				android.getPropertyValue(queries.feedbackLabel, 'text', function (labelText) {
					assert(labelText).equals("Selected Red");
				})
			]
		},
		"Select Violet in the Colors list": {
			'android': [
				android.selectRow(queries.expandableList, 6, 2)
			]
		},
		"Verify Violet was selected": {
			'android': [
				android.getPropertyValue(queries.feedbackLabel, 'text', function (labelText) {
					assert(labelText).equals("Selected Violet");
				})
			]
		},
		"Select Aardvark in the Animals list": {
			'android': [
				android.selectRow(queries.expandableList, 0, 1)
				
			]
		},
		"Verify Aardvark was selected": {
			'android': [
				android.getPropertyValue(queries.feedbackLabel, 'text', function (labelText) {
					assert(labelText).equals("Selected Aardvark");
				})
			]
		},
		"Select Mercury in the Planets list": {
			'android': [
				android.selectRow(queries.expandableList, 0, 0)
			]
		},
		"Verify Mercury was selected": {
			'android': [
				android.getPropertyValue(queries.feedbackLabel, 'text', function (labelText) {
					assert(labelText).equals("Selected Mercury");
				})
			]
		},
		"Collapse the list": {
			'android' : [
			android.tap(queries.expandableList),
			android.wait(10000)]
		}
		
	};

	describe("Automate an expandable list", function () {
		test("Select an item", function () {
			step("Load expandable list page");
			step("Select Red in the Colors list");
			step("Verify Red was selected");
			step("Collapse the list");
			
		});

		test("Select an item from each list", function () {
			step("Load expandable list page");
			step("Select Red in the Colors list");
			step("Select Aardvark in the Animals list");
			step("Verify Aardvark was selected");
			step("Select Mercury in the Planets list");
			step("Verify Mercury was selected");
			step("Select Violet in the Colors list");
			step("Verify Violet was selected");
		});
	}, stepRepository);
});