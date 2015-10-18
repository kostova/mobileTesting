spec(function () {
	var queries = {
		miscControlsButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Miscellaneous Controls' } },
		hardwareFeedback: { 'class': 'android.widget.TextView', 'properties': { 'contentDescription': 'Hardware button feedback' } },
		checkedTextView: { 'class': 'android.widget.CheckedTextView' },
		indeterminateProgressIndicator: { 'class': 'android.widget.ProgressBar', 'properties': { 'id': 'indeterminateProgressBar' } },
		determinateProgressBar: { 'class': 'android.widget.ProgressBar', 'properties': { 'id': 'determinateProgressBar' } },
		slider: { 'class': 'android.widget.SeekBar' },
		ratingBar: { 'class': 'android.widget.RatingBar' },
		gallery: { 'class': 'android.widget.Gallery' }
	};

	var stepRepository = {
		'Load Miscellaneous Controls page': {
			'android': [
				android.launch('com.telerik.demoapplication'),
				android.tap(queries.miscControlsButton)
			]
		},
		'Press Menu button': {
			'android': [
				android.wait(2000),
				android.pressMenuButton()
			]
		},
		'Verify that Menu button press was recognized': {
			'android': [
				android.getPropertyValue(queries.hardwareFeedback, 'text', function (contents) {
					assert(contents).equals('Menu');
				})
			]
		},
		'Press Search button': {
			'android': [
				android.pressSearchButton()
			]
		},
		'Verify that Search button press was recognized': {
			'android': [
				android.getPropertyValue(queries.hardwareFeedback, 'text', function (contents) {
					assert(contents).equals('Search');
				})
			]
		},
		'Tap CheckedTextView': {
			'android': [
				android.tap(queries.checkedTextView)
			]
		},
		'Verify CheckedTextView is checked': {
			'android': [
				android.getPropertyValue(queries.checkedTextView, 'checked', function (isChecked) {
					assert(isChecked).equals(true);
				})
			]
		},
		'Verify CheckedTextView is unchecked': {
			'android': [
				android.getPropertyValue(queries.checkedTextView, 'checked', function (isChecked) {
					assert(isChecked).equals(false);
				})
			]
		},
		'Set CheckedTextView checked': {
			'android': [
				android.toggle(queries.checkedTextView, true)
			]
		},
		'Set CheckedTextView unchecked': {
			'android': [
				android.toggle(queries.checkedTextView, false)
			]
		},
		'Verify indeterminate progress indicator is indeterminate': {
			'android': [
				android.getPropertyValue(queries.indeterminateProgressIndicator, 'indeterminate', function (isIndeterminate) {
					assert(isIndeterminate).equals(true);
				})
			]
		},
		'Verify determinate progress bar shows 25%': {
			'android': [
				android.getPropertyValue(queries.determinateProgressBar, 'progress', function (progress) {
					assert(progress).equals(25);
				}),
				android.getPropertyValue(queries.determinateProgressBar, 'secondaryProgress', function (secondaryProgress) {
					assert(secondaryProgress).equals(50);
				})
			]
		},
		'Set slider to 55': {
			'android': [
				android.setValue(queries.slider, 55)
			]
		},
		'Verify progress bar shows 55%': {
			'android': [
				android.getPropertyValue(queries.determinateProgressBar, 'progress', function (progress) {
					assert(progress).equals(55);
				})
			]
		},
		'Set rating to 3.5': {
			'android': [
				android.setValue(queries.ratingBar, 3.5)
			]
		},
		'Verify rating shows 3.5': {
			'android': [
				android.getPropertyValue(queries.ratingBar, 'rating', function (rating) {
					assert(rating).equals(3.5);
				})
			]
		},
		'Page gallery to page four': {
			'android': [
				android.selectRow(queries.gallery, 3)
			]
		},
		'Verify that Mars is shown in gallery': {
			'android': [
				android.getPropertyValue([queries.gallery, { 'class': 'android.widget.TextView', 'index': 1 }], 'text', function (label) {
					assert(label).equals("Mars");
				})
			]
		}
	};

	describe("Miscellaneous Controls", function () {
		test("Automate hardware buttons", function () {
			step('Load Miscellaneous Controls page');
			step('Press Menu button');
			step('Verify that Menu button press was recognized');
			step('Press Search button');
			step('Verify that Search button press was recognized');
		});

		test("Exercise CheckedTextView", function () {
			step('Load Miscellaneous Controls page');
			step('Verify CheckedTextView is checked');
			step('Tap CheckedTextView');
			step('Verify CheckedTextView is unchecked');
			step('Set CheckedTextView checked');
			step('Verify CheckedTextView is checked');
			step('Set CheckedTextView unchecked');
			step('Verify CheckedTextView is unchecked');
		});

		test("Check ProgressBar properties", function () {
			step('Load Miscellaneous Controls page');
			step('Verify indeterminate progress indicator is indeterminate');
			step('Verify determinate progress bar shows 25%');
		});

		test("Exercise slider", function () {
			step('Load Miscellaneous Controls page');
			step('Set slider to 55');
			step('Verify progress bar shows 55%');
		});

		test("Exercise rating bar", function () {
			step('Load Miscellaneous Controls page');
			step('Set rating to 3.5');
			step('Verify rating shows 3.5');
		});

		test("Page through gallery", function () {
			step('Load Miscellaneous Controls page');
			step('Page gallery to page four');
			step('Verify that Mars is shown in gallery');
		});
	}, stepRepository);
});