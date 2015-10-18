spec(function(){

	var CURR_DOMAIN = 'http://demos.telerik.com/mobile-testing/tacos/',
	    PREP_DOMAIN = 'http://demos.telerik.com/mobile-testing/tacos/agent/TelerikTestingPrepareDomain.html';

	// queries for this suite, structured in a way
	// that makes sense for these demo tests
	var queries = {
		queries: {
			// examples of different query types
			// each one selects the same element
			tagName: {tagName: "button", index: 0},
			id: {id: "submit", index: 0},
			name: {name: "submitButton", index: 0},
			className: {className: "submitButton", index: 0},
			chained: [{tagName: "fieldset", index: 3}, {className: "submitButton", index: 0}]
		},
		checkboxes: {
			giftwrap: {tagName: "input", index: 2},
			newsletter: {name: "newsletterSubscribe"},
			imageRadio: {className: "imageRadio", index: 1},
			cardType: [{tagName: "fieldset", index: 3}, {name: "cardType", index: 2}]
		},
		selects: {
			fillings: {name: "filling"},
			toppings: {name: "toppings"},
			state: {name: "state"}
		},
		textareas: {
			comments: {name: "comments"}
		},
		inputs: {
			name: {name: "name"},
			phone: {name: "phone"},
			email: {name: "email"}
		},
		buttons: {
			submit: { id: 'submit'}
		}
	};

	// vars used by various steps
	var COLOR = "rgb(95, 158, 160)",
		// COLOR = "#5F9EA0",
		// COLOR = "cadetblue",
		ALERT_TEXT = "There were some problems with your order. Please correct them and submit again.",
		toppingsArr = ["avocado", "grilledOnion", "cilantro"];
	
	// This suite demonstrates many common control interactions
	// Note that the step operations are return inside the step
	// function. It is preferable to define them in a step definitions
	// object and to pass that object into `describe()`
	describe("Common HTML controls", function(){

		// redirect testing agent to the test site
		test("Redirect to SUT", function() {
			step("Redirect to site under test", function(){
				return [
					web.prepareDomain(PREP_DOMAIN),
					web.navigateToUrl(CURR_DOMAIN),
					web.wait(500),
					web.waitForUrl(CURR_DOMAIN, 5000)
				];
			});
		});

		// test the various query types
		test("Queries", function(){

			step("tag name query", function(){
				return[
					web.setStyle(queries.queries.tagName, "background-color", COLOR),
					web.getStyle(queries.queries.tagName, "background-color", function(res){
						assert(res).equals(COLOR);
					})
				];
			});

			step("id query", function(){
				return[
					web.getStyle(queries.queries.id, "background-color", function(res){
						assert(res).equals(COLOR);
					})
				];
			});

			step("name query", function(){
				return[
					web.getStyle(queries.queries.name, "background-color", function(res){
						assert(res).equals(COLOR);
					})
				];
			});

			step("class name query", function(){
				return[
				web.getStyle(queries.queries.className, "background-color", function(res){
					assert(res).equals(COLOR);
				})
			];});

			step("chained query", function(){
				return[
					web.getStyle(queries.queries.chained, "background-color", function(res){
						assert(res).equals(COLOR);
					}),
				];
			});
		});

		// interact with checkboxes and radios
		test("Checkboxes and Radios", function(){

			step("check 'gift wrapping' checkbox", function(){
				return[
					web.setChecked(queries.checkboxes.giftwrap, true),
					web.getChecked(queries.checkboxes.giftwrap, function(res){
						assert(res).equals(true);
					})
				];
			});

			step("uncheck 'newsletter' checkbox", function(){
				return[
					web.setChecked(queries.checkboxes.newsletter, false),
					web.getChecked(queries.checkboxes.newsletter, function(res){
						assert(res).equals(false);
					})
				];
			});

			step("select 'flour tortilla' radio", function(){
				return[
					web.setChecked(queries.checkboxes.imageRadio, true),
					web.getChecked(queries.checkboxes.imageRadio, function(res){
						assert(res).equals(true);
					})
				];
			});

			step("select 'cheddacard' radio", function(){
				return[
					web.setChecked(queries.checkboxes.cardType, true),
					web.getChecked(queries.checkboxes.cardType, function(res){
						assert(res).equals(true);
					})
				];
			});
		});

		// interact with select elementz
		test("Selects and Multi-selects", function(){

			step("select chicken filling", function(){
				return[
					web.setSelectedIndex(queries.selects.fillings, 2),
					web.getSelectedIndex(queries.selects.fillings, function(res){
						assert(res).equals(2);
					})
				];
			});

			step("select avocado, grilled onion, and cilantro toppings", function(){
				return[
					web.setSelectedValue(queries.selects.toppings, toppingsArr),
					web.getSelectedValue(queries.selects.toppings, function(res){
						assert(res).equals(toppingsArr);
					})
				];
			});

			step("select state Texas", function(){
				return[
					web.setSelectedText(queries.selects.state, "Texas"),
					web.getSelectedText(queries.selects.state, function(res){
						assert(res).equals("Texas");
					})
				];
			});
		});

		test("Textarea", function(){

			step("add a comment to the comment textarea", function(){
				return[
					web.setValue(queries.textareas.comments, "Please make it extra spicy!"),
					web.getValue(queries.textareas.comments, function(res){
						assert(res).equals("Please make it extra spicy!");
					})
				];
			});
		});

		test("Inputs", function(){

			step("enter name input", function(){
				return[
					web.setValue(queries.inputs.name, "John Doe"),
					web.getValue(queries.inputs.name, function(res){
						assert(res).equals("John Doe");
					})
				];
			});

			step("enter phone input", function(){
				return[
					web.setValue(queries.inputs.phone, "1234567890"),
					web.getValue(queries.inputs.phone, function(res){
						assert(res).equals("1234567890");
					})
				];
			});

			step("enter email input", function(){
				return[
					web.setValue(queries.inputs.email, "johndoe@telerik.com"),
					web.getValue(queries.inputs.email, function(res){
						assert(res).equals("johndoe@telerik.com");
					})
				];
			});
		});

		test("Alert Window", function(){
			
			step("trigger alert window", function(){
				return[
					web.dialogs.prepare(web.dialogs.ALERT),
					web.click(queries.buttons.submit),
					web.dialogs.getState(function(state){
						var dialog = state[web.dialogs.ALERT];
						assert(dialog.length).equals(1);
						assert(dialog[0].handled).equals(true);
						assert(dialog[0].actualText).equals(ALERT_TEXT);
					})
				];
			});
		});
	});

});