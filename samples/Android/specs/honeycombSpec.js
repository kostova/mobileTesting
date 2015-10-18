spec(function () {

	var queries = {
		honeycombButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'HONEYCOMB Controls' } },
		calendar: { 'class': 'android.widget.CalendarView' },
		feedback: { 'properties': { 'id': 'feedback' } },
		numberPicker: { 'class': 'android.widget.NumberPicker' },
		searchView: { 'class': 'android.widget.SearchView' },
		layout: { 'class': 'android.widget.LinearLayout' }
	};

	var stepRepository = {
		"Load HONEYCOMB page": {
			'android': [
				android.launch("com.telerik.demoapplication"),
				android.swipe(queries.layout, android.constants.swipeDirection.up),
				android.tap(queries.honeycombButton)
			]
		},
		"Set date in calendar to 1 Apr 2014": {
			'android': [
				android.setDate(queries.calendar, new Date("01 Apr 2014"))
			]
		},
		"Verify date was set to 1 Apr 2014": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals("Selected 2014-3-1");
				})
			]
		},
		"Set number picker to 5": {
			'android': [
				android.setValue(queries.numberPicker, 5)
			]
		},
		"Verify number picker was set to 5": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals("Set number picker to 5");
				})
			]
		},
		"Search for some text": {
			'android': [
				android.wait(2000),
				android.typeText(queries.searchView, "some text"),
				android.pressReturn(queries.searchView) 
			]
		},
		"Verify search happened": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals("Searched for some text");
				})
			]
		}
	};

	describe("Automate HONEYCOMB controls", function () {
		test("Automate calendar", function () {
			step("Load HONEYCOMB page");
			step("Set date in calendar to 1 Apr 2014");
			step("Verify date was set to 1 Apr 2014");
		});

		test("Automate number picker", function () {
			step("Load HONEYCOMB page");
			step("Set number picker to 5");
			step("Verify number picker was set to 5");
		});

		test("Automate search view", function () {
			step("Load HONEYCOMB page");
			step("Search for some text");
			step("Verify search happened");
		});
	}, stepRepository);
});