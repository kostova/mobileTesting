spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		gestureView: { 'class': 'UIView', 'properties': { 'tag': 3 }},
		labelView: { 'class': 'UILabel', 'properties': { 'tag': 2 }}
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},
		'And is on the gestures demo': {
			'ios': [
				ios.scrollToRow(queries.tableView, 19, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 19, 0),
				ios.wait(1000)
			]
		},
		'Verify swipe gesture works' : {
			'ios' : [
				ios.swipe(queries.gestureView, ios.constants.swipeDirection.right),
				ios.getPropertyValue(queries.labelView, 'text', function(value) {
					assert(value).equals("Swipe Gesture Detected");
				}),
			]
		},
		'Verify pinch gesture works' : {
			'ios' : [
				ios.pinchIn(queries.gestureView, null, 60, 30),
				ios.getPropertyValue(queries.labelView, 'text', function(value) {
					assert(value).equals("Pinch Gesture Detected");
				}),
			]
		},
		'Verify rotate gesture works' : {
			'ios' : [
				ios.twoFingerRotate(queries.gestureView, null, 90),
				ios.getPropertyValue(queries.labelView, 'text', function(value) {
					assert(value).equals("Rotation Gesture Detected");
				}),
			]
		},
		'Verify tap gesture works' : {
			'ios' : [
				ios.tap(queries.gestureView),
				ios.getPropertyValue(queries.labelView, 'text', function(value) {
					assert(value).equals("Tap Gesture Detected");
				}),
			]
		},
		'Verify double tap gesture works' : {
			'ios' : [
				ios.tap(queries.gestureView, 2),
				ios.getPropertyValue(queries.labelView, 'text', function(value) {
					assert(value).equals("Double Tap Gesture Detected");
				}),
			]
		},
		'Verify long press gesture works' : {
			'ios' : [
				ios.tapAndHold(queries.gestureView),
				ios.getPropertyValue(queries.labelView, 'text', function(value) {
					assert(value).equals("Long Press Gesture Detected");
				}),
			]
		},
	};

	describe("Verify gestures work correctly", function() {
		test("Perform UIGestureRecognizer gestures", function() {
			step('Given DemoApplication is running');
			step('And is on the gestures demo');
			step('Verify swipe gesture works');
			step('Verify pinch gesture works');
			step('Verify rotate gesture works');
			step('Verify tap gesture works');
			step('Verify double tap gesture works');
			step('Verify long press gesture works');
		});
	}, stepRepository);

});