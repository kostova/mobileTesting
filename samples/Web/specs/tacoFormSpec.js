
spec(function(){

    var CURR_DOMAIN = 'http://demos.telerik.com/mobile-testing/tacos/',
	    PREP_DOMAIN = 'http://demos.telerik.com/mobile-testing/tacos/agent/TelerikTestingPrepareDomain.html';

	// queries for this suite, structured in a way
	// that makes sense for this web page
	var queries = {
		tacoBuilder: {
			tortilla: {className: "tortillaRadios"},
			filling: {name: "filling"},
			toppings: {name: "toppings"},
			comments: {name: "comments"},
			giftwrap: {name: "giftwrap"},
			subTotal: {className: "subtotal"}
		},
		contactInfo: {
			name: {name: "name"},
			phone: {name: "phone"},
			email: {name: "email"},
			newsletter: {name: "newsletterSubscribe"}
		},
		billingAddress: {
			address: {name: "address"},
			address2: {name: "address2"},
			city: {name: "city"},
			state: {name: "state"},
			zip: {name: "zip"}
		},
		billingInfo: {
			cardType: {className: "cardType"},
			cardNum: {name: "cardNum"},
			expiryMonth: {name: "expiryMonth"},
			expiryYear: {name: "expiryYear"},
			submit: {id: "submit"}
		}
	};

	// vars used by various steps
	var toppingsArr = ["avocado", "grilledOnion", "cilantro"],
		cornTortillaRadio = [queries.tacoBuilder.tortilla, {tagName: "input", index: 0}],
		flourTortillaRadio = [queries.tacoBuilder.tortilla, {tagName: "input", index: 1}],
		cheddaCard = [queries.billingInfo.cardType, {tagName: "input", index: 2}],
		ERROR_TEXT = "There were some problems with your order. Please correct them and submit again.",
		SUCCESS_TEXT = "Thank you for your order! A download link for your piping hot tacos will be emailed to you as soon as they're ready!";

	// define all steps here so they can be reused, and so that
	// the tests read in plain language
	var stepRepository = {
		"Redirect to site under test": {
			web: [
				web.prepareDomain(PREP_DOMAIN),
				web.navigateToUrl(CURR_DOMAIN),
				web.wait(500),
				web.waitForUrl(CURR_DOMAIN, 5000)
			]
		},		
		"tap flour tortilla": {
			web: [				
				web.tap(flourTortillaRadio),
				web.getChecked(flourTortillaRadio, function(res){
					assert(res).equals(true);
				})
			]
		},
		"click corn tortilla": {
			web: [				
				web.click(cornTortillaRadio),
				web.getChecked(cornTortillaRadio, function(res){
					assert(res).equals(true);
				})
			]
		},
		"select fajita filling": {
			web: [
				web.setSelectedValue(queries.tacoBuilder.filling, "fajita"),
				web.getSelectedValue(queries.tacoBuilder.filling, function(res){
					assert(res).equals("fajita");
				})
			]
		},
		"hide tortillas": {			
			web: [
				web.setStyle(queries.tacoBuilder.tortilla, 'display', 'none'),
				web.getStyle(queries.tacoBuilder.tortilla, 'display', function(res) {
					assert(res).equals('none');						
				})]
		},
		"show tortillas": {			
			web: [
				web.setStyle(queries.tacoBuilder.tortilla, 'display', 'block'),
				web.getStyle(queries.tacoBuilder.tortilla, 'display', function(res) {
					assert(res).equals('block');						
				})]
		},
		"select avocado, grilled onion, and cilantro toppings": {
			web: [
				web.setSelectedValue(queries.tacoBuilder.toppings, toppingsArr),
				web.getSelectedValue(queries.tacoBuilder.toppings, function(res){
					assert(res).equals(toppingsArr);
				})
			]
		},
		"leave a comment": {
			web: [
				web.setValue(queries.tacoBuilder.comments, "BAM!"),
				web.getValue(queries.tacoBuilder.comments, function(res){
					assert(res).equals("BAM!");
				})
			]
		},
		"check 'gift wrapping' checkbox": {
			web: [
				web.setChecked(queries.tacoBuilder.giftwrap, true),
				web.getChecked(queries.tacoBuilder.giftwrap, function(res){
					assert(res).equals(true);
				})
			]
		},		
		"ensure subtotal is $12.75": {
			web: [
				web.getTextContent(queries.tacoBuilder.subTotal, function(res){
					assert(res).equals("12.75");
				})
			]
		},

		"enter name input": {
			web: [
				web.setValue(queries.contactInfo.name, "John Doe"),
				web.getValue(queries.contactInfo.name, function(res){
					assert(res).equals("John Doe");
				})
			]
		},
		"enter phone input": {
			web: [
				web.setValue(queries.contactInfo.phone, "1234567890"),
				web.getValue(queries.contactInfo.phone, function(res){
					assert(res).equals("1234567890");
				})
			]
		},
		"enter email input": {
			web: [
				web.setValue(queries.contactInfo.email, "johndoe@telerik.com"),
				web.getValue(queries.contactInfo.email, function(res){
					assert(res).equals("johndoe@telerik.com");
				})
			]
		},
		"uncheck 'newsletter' checkbox": {
			web: [
				web.setChecked(queries.contactInfo.newsletter, false),
				web.getChecked(queries.contactInfo.newsletter, function(res){
					assert(res).equals(false);
				})
			]
		},

		"enter address": {
			web: [
				web.setValue(queries.billingAddress.address, "1234 Something Street"),
				web.getValue(queries.billingAddress.address, function(res){
					assert(res).equals("1234 Something Street");
				})
			]
		},
		"enter address cont.": {
			web: [
				web.setValue(queries.billingAddress.address2, "apt. #9"),
				web.getValue(queries.billingAddress.address2, function(res){
					assert(res).equals("apt. #9");
				})
			]
		},
		"enter city": {
			web: [
				web.setValue(queries.billingAddress.city, "Austin"),
				web.getValue(queries.billingAddress.city, function(res){
					assert(res).equals("Austin");
				})
			]
		},
		"select state": {
			web: [
				web.setSelectedValue(queries.billingAddress.state, "TX"),
				web.getSelectedValue(queries.billingAddress.state, function(res){
					assert(res).equals("TX");
				})
			]
		},
		"enter zip": {
			web: [
				web.setValue(queries.billingAddress.zip, "78741"),
				web.getValue(queries.billingAddress.zip, function(res){
					assert(res).equals("78741");
				})
			]
		},

		"set credit card radio": {
			web: [
				web.setChecked(cheddaCard, true),
				web.getChecked(cheddaCard, function(res){
					assert(res).equals(true);
				})
			]
		},
		"enter card number": {
			web: [
				web.setValue(queries.billingInfo.cardNum, "1234-5678-9101-1121"),
				web.getValue(queries.billingInfo.cardNum, function(res){
					assert(res).equals("1234-5678-9101-1121");
				})
			]
		},
		"select expiration month": {
			web: [
				web.setSelectedValue(queries.billingInfo.expiryMonth, "03"),
				web.getSelectedValue(queries.billingInfo.expiryMonth, function(res){
					assert(res).equals("03");
				})
			]
		},
		"select expiration year": {
			web: [
				web.setSelectedValue(queries.billingInfo.expiryYear, "2016"),
				web.getSelectedValue(queries.billingInfo.expiryYear, function(res){
					assert(res).equals("2016");
				})
			]
		},

		"clear card number field": {
			web: [
				web.setValue(queries.billingInfo.cardNum, "")
			]
		},
		"trigger validation error": {
			web: [
				web.dialogs.prepare(web.dialogs.ALERT),
				web.click(queries.billingInfo.submit),
				web.dialogs.getState(function(state){

					assert(state[web.dialogs.ALERT].length).greaterThan(0);

					// grab the last alert dialog
					var dialog = state[web.dialogs.ALERT][state[web.dialogs.ALERT].length-1];
					
					assert(dialog.handled).equals(true);
					assert(dialog.actualText).equals(ERROR_TEXT);
				})
			]
		},
		"fill card number field": {
			web: [
				web.setValue(queries.billingInfo.cardNum, "1234-5678-9101-1121"),
				web.wait(100)
			]
		},
		"submit form": {
			web: [
				web.dialogs.prepare(web.dialogs.ALERT),
				web.click(queries.billingInfo.submit),
				web.dialogs.getState(function(state){

					assert(state[web.dialogs.ALERT].length).greaterThan(0);

					// grab the last alert dialog
					var dialog = state[web.dialogs.ALERT][state[web.dialogs.ALERT].length-1];
					
					assert(dialog.handled).equals(true);
					assert(dialog.actualText).equals(SUCCESS_TEXT);
				})
			]
		}
	};


	// This suite represents a typical test suite
	// note that the steps are defined using a step definitions
	// object instead of being defined inline.

	describe("Taco form entry", function(){

		// redirect testing agent to the test site
		test("Redirect to SUT", function() {
			step("Redirect to site under test");
		});

		test("Build a taco", function(){
			step("tap flour tortilla");
			step("click corn tortilla");
			step("select fajita filling");			
			step("select avocado, grilled onion, and cilantro toppings");
			step("leave a comment");
			step("check 'gift wrapping' checkbox");			
			step("ensure subtotal is $12.75");
		});

		test("Test CSS get and set", function(){
			step("hide tortillas");
			step("show tortillas");
		});

		test("Enter contact info", function(){
			step("enter name input");
			step("enter phone input");
			step("enter email input");
			step("uncheck 'newsletter' checkbox");
		});

		test("Enter billing address info", function(){
			step("enter address");
			step("enter address cont.");
			step("enter city");
			step("select state");
			step("enter zip");
		});

		test("Enter billing info", function(){
			step("set credit card radio");
			step("enter card number");
			step("select expiration month");
			step("select expiration year");
		});

		test("Ensure invalid form does not submit", function(){
			step("clear card number field");
			step("trigger validation error");
			step("fill card number field");
			step("submit form");
		});

	}, stepRepository);

});