spec(function () {

	var queries = {
		dateTimeButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Date / Time Controls' } },
		datePicker: { 'class': 'android.widget.DatePicker' },
		feedback: { 'class': 'android.widget.TextView', 'properties': { 'contentDescription': 'Date / Time feedback' } },
		timePicker: { 'class': 'android.widget.TimePicker' }
	}

	var stepRepository = { 
		"Load Date / Time Controls page": {
			'android': [
				android.launch('com.telerik.demoapplication'),
				android.tap(queries.dateTimeButton)
			]
		},
		"Set date picker to 1 Apr 2014": {
			'android': [
				android.setDate(queries.datePicker, new Date("1 Apr 2014"))
			]
		},
		"Verify date picker was set to 1 Apr 2014": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals("Selected 2014-04-01");
				})
			]
		},
		"Set time picker to 2:34 pm": {
			'android': [
				android.setDate(queries.timePicker, (function () { var d = new Date(); d.setHours(14); d.setMinutes(34); return d; })())
			]
		},
		"Verify time was set to 2:34 pm": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals("Selected 14:34");
				})
			]
		}
	};

	describe("Automate date and time controls", function () {
		test("Automate DatePicker", function () {
			step("Load Date / Time Controls page");
			step("Set date picker to 1 Apr 2014");
			step("Verify date picker was set to 1 Apr 2014");
		});

		test("Automate TimePicker", function () {
			step("Load Date / Time Controls page");
			step("Set time picker to 2:34 pm");
			step("Verify time was set to 2:34 pm");
		});
	}, stepRepository);
});