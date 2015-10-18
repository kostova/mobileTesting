spec(function() {

	var queries = {
		ios: {
			tableView: { 'class': 'UITableView', 'index': 0 },
			pageView: { 'class': 'UIView', 'properties': { 'tag': 1 } },
			page0: {'class': 'UILabel', 'properties': { 'text': 'Page: 0'} },
			page1: {'class': 'UILabel', 'properties': { 'text': 'Page: 1'} },
			indicator: [ {'class': 'UIPageControl' }, {'class': 'UIView', 'exactClass': true, 'index': 1} ]
		}
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},
		'And is on the pageControl demo': {
			'ios': [
				ios.scrollToRow(queries.ios.tableView, 10, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.ios.tableView, 10, 0)
			]
		},
		'Wait until Page 0 label exists and is visible': {
			'ios' : [
				ios.waitForElementExists(queries.ios.page0, true, 500, 2000),
				ios.waitForElementVisible(queries.ios.page0, true, 500, 2000)
			]
		},
		'Wait until Page 1 label exists and is not visible': {
			'ios' : [
				ios.waitForElementExists(queries.ios.page1, true, 500, 2000),
				ios.waitForElementVisible(queries.ios.page1, false, 500, 2000)
			]
		},
		'Swipe and wait until indicator is updated': {
			'ios' : [
				ios.swipe(queries.ios.pageView, ios.constants.swipeDirection.left),
				ios.waitForPropertyValue(queries.ios.indicator, 'backgroundColor',  '{1.000000, 1.000000}', 500, 2000)
			]
		},
	};

	describe("Wait for UIPageControl elements", function() {
		test("Wait for elements and swipe", function() {
			step('Given DemoApplication is running');
			step('And is on the pageControl demo');
			step('Wait until Page 0 label exists and is visible');
			step('Wait until Page 1 label exists and is not visible');
			step('Swipe and wait until indicator is updated');
		});
	}, stepRepository);
});

