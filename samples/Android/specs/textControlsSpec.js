spec(function () {
	var queries = {
		textControlsButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Text Controls' } },
		basicEditText: { 'properties': { 'contentDescription': 'Base EditText' } },
		autoComplete: { 'class': 'android.widget.AutoCompleteTextView' },
		multiAutoComplete: { 'class': 'android.widget.MultiAutoCompleteTextView' }
	};

	var stepRepository = {
		'Load the Text Controls page': {
			'android': [
				android.launch('com.telerik.demoapplication'),
				android.tap(queries.textControlsButton)
			]
		},
		'Set EditText contents to "Hello World"': {
			'android': [
				android.setText(queries.basicEditText, 'Hello World')
			]
		},
		'Verify "Hello World" in EditText': {
			'android': [
				android.getPropertyValue(queries.basicEditText, 'text', function (contents) {
					assert(contents).equals('Hello World');
				})
			]
		},
		'Set autocomplete text box contents to "Hello World"': {
			'android': [
				android.setText(queries.autoComplete, 'Hello World')
			]
		},
		'Verify "Hello World" in autocomplete text box': {
			'android': [
				android.getPropertyValue(queries.autoComplete, 'text', function (contents) {
					assert(contents).equals('Hello World');
				})
			]
		},
		'Set multi-autocomplete text box contents to "Hello World"': {
			'android': [
				android.setText(queries.multiAutoComplete, 'Hello World')
			]
		},
		'Verify "Hello World" in multi-autocomplete text box': {
			'android': [
				android.getPropertyValue(queries.multiAutoComplete, 'text', function (contents) {
					assert(contents).equals('Hello World');
				})
			]
		},
		'Type "It was" into basic text box': {
			'android': [
				android.typeText(queries.basicEditText, 'It was')
			]
		},
		'Type "a dark and" into autocomplete text box': {
			'android': [
				android.typeText(queries.autoComplete, 'a dark and')
			]
		},
		'Type "stormy night" into multi-autocomplete text box': {
			'android': [
				android.typeText(queries.multiAutoComplete, 'stormy night')
			]
		},
		'Verify typeText contents': {
			'android': [
				android.getPropertyValue(queries.basicEditText, 'text', function (contents) {
					assert(contents).equals('It was');
				}),
				android.getPropertyValue(queries.autoComplete, 'text', function (contents) {
					assert(contents).equals('a dark and');
				}),
				android.getPropertyValue(queries.multiAutoComplete, 'text', function (contents) {
					assert(contents).equals('stormy night');
				})
			]
		}
	};

	describe('Text Controls Sample Tests', function () {
		test('Verify text control automation', function () {
			step('Load the Text Controls page');
			step('Set EditText contents to "Hello World"');
			step('Verify "Hello World" in EditText');
			step('Set autocomplete text box contents to "Hello World"');
			step('Verify "Hello World" in autocomplete text box');
			step('Set multi-autocomplete text box contents to "Hello World"');
			step('Verify "Hello World" in multi-autocomplete text box');

			step('Type "It was" into basic text box');
			step('Type "a dark and" into autocomplete text box');
			step('Type "stormy night" into multi-autocomplete text box');
			step('Verify typeText contents');
		});
	}, stepRepository);
});