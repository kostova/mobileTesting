spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		scrollView: { 'class': 'UIScrollView', properties: {'tag': 5 }},
		window: { 'class': 'UIWindow', properties: { 'windowLevel': 0 }}
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},
		'Go to UIScollView w/Image demo': {
			'ios': [
				ios.scrollToRow(queries.tableView, 16, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 16, 0)
			]
		},
		'Pinch in image' : {
			'ios': [
				ios.wait(1000),
				ios.pinchIn(queries.scrollView, { x: 200, y: 200}, 60, 30),
				ios.wait(1000),
				ios.pinchIn(queries.scrollView, { x: 200, y: 200}, 60, 4),
				ios.wait(1000),
				ios.pinchIn(queries.scrollView, { x: 200, y: 200}, null, 4),
				ios.wait(1000),
				ios.pinchIn(queries.scrollView, null, null, 4),
				ios.wait(1000),
			]
		},
		'Pinch out image' : {
			'ios': [
				ios.wait(1000),
				ios.pinchOut(queries.scrollView, { x: 200, y: 200}, 60, 30),
				ios.wait(1000),
				ios.pinchOut(queries.scrollView, { x: 200, y: 200}, 60, 4),
				ios.wait(1000),
				ios.pinchOut(queries.scrollView, { x: 200, y: 200}, null, 4),
				ios.wait(1000),
				ios.pinchOut(queries.scrollView, null, null, 4),
				ios.wait(1000),
			]
		},
		'Swipe image' : {
			'ios': [
				ios.wait(1000),
				ios.swipe(queries.scrollView, ios.constants.swipeDirection.left),
				ios.wait(1000),
				ios.swipe(queries.scrollView, ios.constants.swipeDirection.right),
				ios.wait(1000),
				// ios.swipe(queries.scrollView, ios.constants.swipeDirection.up),
				// ios.wait(1000),
				// ios.swipe(queries.scrollView, ios.constants.swipeDirection.down),
				// ios.wait(1000),
			]
		},
		'Drag image' : {
			'ios': [
				ios.wait(1000),
				ios.dragToPoint(queries.scrollView, { x: 100, y: 100}, { x: 200, y: 200}),
				ios.wait(1000),
				ios.dragToPoint(queries.scrollView, { x: 200, y: 100}, { x: 100, y: 100}, 100),
				ios.wait(1000),
				ios.dragToDisplacement(queries.scrollView, { x: 100, y: 100}, { x: 200, y: 0}, 20),
				ios.wait(1000),
			]
		},
		'Perform gestures on window' : {
			'ios': [
				ios.wait(1000),
				ios.pinchOut(queries.window, { x: 200, y: 200}, 60, 30),
				ios.wait(1000),
				ios.pinchIn(queries.window, { x: 200, y: 200}, 60, 30),
				ios.wait(1000),
				ios.dragToDisplacement(queries.window, { x: 100, y: 100}, { x: 200, y: 0}, 20),
				ios.wait(1000),
				ios.swipe(queries.window, ios.constants.swipeDirection.left),
				ios.wait(1000),
			]
		}
	};

	describe("Verify gestures on scrollView w/Image work correctly", function() {
		test("Perform pinch in gesture", function() {
			step('Given DemoApplication is running');
			step('Go to UIScollView w/Image demo');
			step('Pinch in image');
		});
		test("Perform pinch out gesture", function() {
			step('Given DemoApplication is running');
			step('Go to UIScollView w/Image demo');
			step('Pinch out image');
		});
		test("Perform swipe gesture", function() {
			step('Given DemoApplication is running');
			step('Go to UIScollView w/Image demo');
			step('Swipe image');
		});
		test("Perform drag gesture", function() {
			step('Given DemoApplication is running');
			step('Go to UIScollView w/Image demo');
			step('Drag image');
		});
		test("Perform gestures on UIScrollView from Window", function() {
			step('Given DemoApplication is running');
			step('Go to UIScollView w/Image demo');
			step('Perform gestures on window');
		});
	}, stepRepository);

});