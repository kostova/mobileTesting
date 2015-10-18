spec(function() {

	var queries = {
		ios: {
			tableView: { 'class': 'UITableView', 'index': 0 },
			pageView: { 'class': 'UIView', 'properties': { 'tag': 1 } },
			page0: {'class': 'UILabel', 'properties': { 'text': 'Page: 0'} },
			page1: {'class': 'UILabel', 'properties': { 'text': 'Page: 1'} },
			page2: {'class': 'UILabel', 'properties': { 'text': 'Page: 2'} },
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
		'And page is swiped right': {
			'ios' : [
				ios.swipe(queries.ios.pageView, ios.constants.swipeDirection.right),
				ios.wait(1000)
			]
		},
		'And page is swiped left': {
			'ios' : [
				ios.swipe(queries.ios.pageView, ios.constants.swipeDirection.left),
				ios.wait(1000)
			]
		},
		'Page 0 is visible': {
			'ios' : [
				ios.elementVisible(queries.ios.page0, function(isVisible) {
					assert(isVisible).equals(true);
				})
			]
		},
		'Page 0 is not visible': {
			'ios' : [
				ios.elementVisible(queries.ios.page0, function(isVisible) {
					assert(isVisible).equals(false);
				})
			]
		},
		'Page 1 is visible': {
			'ios' : [
				ios.elementVisible(queries.ios.page1, function(isVisible) {
					assert(isVisible).equals(true);
				})
			]
		},
		'Page 1 is not visible': {
			'ios' : [
				ios.elementVisible(queries.ios.page1, function(isVisible) {
					assert(isVisible).equals(false);
				})
			]
		},
		'Page 2 is not visible': {
			'ios' : [
				ios.elementVisible(queries.ios.page2, function(isVisible) {
					assert(isVisible).equals(false);
				})
			]
		}
	};

	describe("Verify UIPageControl automation functions correctly", function() {
		test("Next page should be visible when page is swiped", function() {
			step('Given DemoApplication is running');
			step('And is on the pageControl demo');
			step('And page is swiped left');
			step('Page 0 is not visible');
			step('Page 1 is visible');
			step('Page 2 is not visible');
			step('And page is swiped right');
			step('Page 0 is visible');
			step('Page 1 is not visible');
			step('Page 2 is not visible');
		});
	}, stepRepository);
});

