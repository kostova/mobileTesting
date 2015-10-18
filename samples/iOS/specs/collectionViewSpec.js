spec(function() {

	var queries = {
		tableView: { 'class': 'UITableView' },
		collectionView: { 'class': 'UICollectionView' }
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'ios': [
				ios.launch('tsdemoapplication://')
			]
		},

		"Go to collectionView demo": {
			'ios': [
				ios.scrollToRow(queries.tableView, 14, 0, ios.constants.tableViewScrollPosition.middle),
				ios.selectRow(queries.tableView, 14, 0)
			]
		},
		"Select items on screen": {
			'ios': [
				ios.selectItem(queries.collectionView, 3, 0),
				ios.selectItem(queries.collectionView, 3, 0),
				ios.selectItem(queries.collectionView, 4, 0),
				ios.selectItem(queries.collectionView, 4, 0),
				ios.selectItem(queries.collectionView, 4, 0),
				ios.selectItem(queries.collectionView, 5, 0),
				ios.selectItem(queries.collectionView, 5, 0),
				ios.selectItem(queries.collectionView, 5, 0)
			]
		},
		"Scroll down and select items": {
			'ios': [
				ios.selectItem(queries.collectionView, 3, 0),
				ios.selectItem(queries.collectionView, 3, 0),
				ios.scrollToItem(queries.collectionView, 40, 0, ios.constants.collectionViewScrollPosition.centeredVertically),
				ios.selectItem(queries.collectionView, 40, 0),
				ios.selectItem(queries.collectionView, 40, 0),
				ios.selectItem(queries.collectionView, 40, 0),
				ios.selectItem(queries.collectionView, 42, 0),
				ios.selectItem(queries.collectionView, 42, 0),
				ios.selectItem(queries.collectionView, 42, 0)
			]
		}
	};

	describe("Verify collectionView automation functions correctly", function() {
		test("CollectionView select items on screen", function() {
			step('Given DemoApplication is running');
			step("Go to collectionView demo");
			step("Select items on screen");
		});
		test("CollectionView scroll down and select items", function() {
			step('Given DemoApplication is running');
			step("Go to collectionView demo");
			step("Scroll down and select items");
		});
	}, stepRepository);

});