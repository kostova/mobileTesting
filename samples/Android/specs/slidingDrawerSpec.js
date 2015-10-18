spec(function () {

	var queries = {
		goSlidingDrawers: { 'class': 'android.widget.Button', 'properties': { 'text': 'Sliding Drawers' } },
		bottomDrawerHandle: { 'properties': { 'id': 'handle1' } },
		bottomDrawerButton: { "exactClass":false,"index":0,"properties":{"id":"com.telerik.demoapplication:id/button1"}},
		feedback: { 'exactClass':false,'index':0,'properties':{'id':'com.telerik.demoapplication:id/feedback'} },
		rightDrawerHandle: { 'properties': { 'id': 'handle2' } },
		rightDrawerButton: { 'exactClass':false,'index':0,'properties':{'id':'com.telerik.demoapplication:id/button2'}}
	};

	var stepRepository = {
		"Load sliding drawers screen": {
			'android': [
				android.launch("com.telerik.demoapplication"),
				android.tap(queries.goSlidingDrawers)
			]
		},
		"Open bottom drawer": {
			'android': [
				android.tap(queries.bottomDrawerHandle),
				android.wait(2000)
			]
		},
		"Tap button in bottom drawer": {
			'android': [
				android.tap(queries.bottomDrawerButton),
				android.wait(2000)
			]
		},
		"Verify bottom drawer button was tapped": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals("Tapped button in bottom drawer");
				})
			]
		},
		"Close bottom drawer and open right drawer": {
			'android': [
				android.tap(queries.bottomDrawerHandle),
				android.wait(2000),
				android.tap(queries.rightDrawerHandle),
				android.wait(2000)
			]
		},
		"Tap button in right drawer": {
			'android': [
				android.tap(queries.rightDrawerButton)
			]
		},
		"Verify right drawer button was tapped": {
			'android': [
				android.getPropertyValue(queries.feedback, 'text', function (labelText) {
					assert(labelText).equals("Tapped button in right drawer");
				})
			]
		}
	};

	describe("Test sliding drawer automation", function () {
		test("Tap buttons inside drawers", function () {
			step("Load sliding drawers screen");
			step("Open bottom drawer");
			step("Tap button in bottom drawer");
			step("Verify bottom drawer button was tapped");
			step("Close bottom drawer and open right drawer");
			step("Tap button in right drawer");
			step("Verify right drawer button was tapped");
		});
	}, stepRepository);
});