spec(function() {

	var queries = {
		gesturesButton: { 'class': 'android.widget.Button', 'properties': { 'text': 'Gestures' } },
		textView: { 'exactClass':false,'index':0,'properties':{'id':'com.telerik.demoapplication:id/lastGesture'} },
		layout: { 'class': 'android.widget.LinearLayout' }
	};

	var stepRepository = {
		'Given DemoApplication is running': {
			'android': [
				android.launch('com.telerik.demoapplication'),
			]
		},
		'And is on the gestures demo': {
			'android': [
				android.swipe(queries.layout, android.constants.swipeDirection.up),
				android.tap(queries.gesturesButton),
			]
		},
		'Verify swipe gesture works' : {
			'android' : [
				android.swipe(queries.layout, android.constants.swipeDirection.right),
				android.getPropertyValue(queries.textView, 'text', function(value) {
					assert(value).equals("Swipe Right");
				}),
			]
		},
		'Verify tap gesture works' : {
			'android' : [
				android.tap(queries.layout),
				android.getPropertyValue(queries.textView, 'text', function(value) {
					assert(value).equals("Tap");
				}),
			]
		},
		'Verify double tap gesture works' : {
			'android' : [
				android.tap(queries.layout, 2),
				android.getPropertyValue(queries.textView, 'text', function(value) {
					assert(value).equals("Double Tap");
				}),
			]
		},
		'Verify long press gesture works' : {
			'android' : [
				android.tapAndHold(queries.layout),
				android.getPropertyValue(queries.textView, 'text', function(value) {
					assert(value).equals("Long Press");
				}),
			]
		},
		'Verify pinchIn gesture works' : {
			'android' : [
				android.pinchIn(queries.layout, null, 120, 60),
				android.getPropertyValue(queries.textView, 'text', function(value) {
					assert(value).equals("Pinch In");
				}),
			]
		},
		'Verify pinchOut gesture works' : {
			'android' : [
				android.pinchOut(queries.layout, null, 120, 60),
				android.getPropertyValue(queries.textView, 'text', function(value) {
					assert(value).equals("Pinch Out");
				}),
			]
		},
	};

	describe("Verify gestures work correctly", function() {
		test("Perform gestures", function() {
			step('Given DemoApplication is running');
			step('And is on the gestures demo');
			step('Verify swipe gesture works');
			step('Verify tap gesture works');
			step('Verify double tap gesture works');
			step('Verify long press gesture works');
			step('Verify pinchIn gesture works');
			step('Verify pinchOut gesture works');
		});
	}, stepRepository);
});