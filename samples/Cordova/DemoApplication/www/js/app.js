(function(){

	$(document).ready(init);

	function init(){

		$("._submit").on("click", function(e){
			if(validate("select, input")){
				alert("Thank you for your order! A download link for your piping hot tacos will be emailed to you as soon as they're ready!");
			} else {
				alert("There were some problems with your order. Please correct them and submit again.");
				$(document).scrollTop( $(".error").closest("fieldset").offset().top - 10 );
			}
		});


		// taco builder
		// tortilla
		$("input[name='tortilla']").on("change", function(e){
			$("#tortillaImg").prop("src", "assets/taco-shell-"+ $(e.target).val() +".png");
		});

		// filling
		$("select[name='filling']").on("change", function(e){
			$("#fillingImg").prop("src", "assets/taco-filling-"+ $(e.target).val() +".png");
		});

		// toppings
		$("select[name='toppings']").on("change", function(e){
			var toppings = $(e.currentTarget).val(),
				toppingsArr = [];

			if(toppings){
				toppingsArr = toppings.map(function(str){
					return "<img src='assets/taco-topping-"+ str +".png'>";
				});
			}

			$("#toppings").html(toppingsArr.join(""));
		});

		// gift wrapping
		$("input[name='giftwrap']").on("change", function(e){
			if($(e.currentTarget).prop("checked")){
				$("#giftwrap").show();
			} else {
				$("#giftwrap").hide();
			}
		});

		// subtotal
		$("input, select").on("change", function(){
			$(".subtotal").html(calculateSubtotal());
		});

		// do an initial subtotal calculation
		$(".subtotal").html(calculateSubtotal());

		// auto format phone number on blur
		$("input[name='phone']").on("blur", function(e){
			var $el = $(e.currentTarget),
				val = $el.val(),
				num = val.replace(/[^0-9]/g, "");

			// if this is probably a valid phone number,
			// format it nicely
			if(num.length === 10){
				$el.val( "("+ num.slice(0,3) +") "+ num.slice(3,6) +"-"+ num.slice(6) );
			}
		});

		// https://discussions.apple.com/message/23745665#23745665
		// hack for iPhone 7.0 multiselects bug
	    if(navigator.userAgent.match(/iPhone OS 7_0_/i)) {
	        $('select[multiple]').each(function(){
	            var select = $(this).on({
	                "focusout": function(){
	                    var values = select.val() || [];
	                    setTimeout(function(){
	                        select.val(values.length ? values : ['']).change();
	                    }, 1000);
	                }
	            });
	            var firstOption = '<option value="" disabled="disabled"';
	            firstOption += (select.val() || []).length > 0 ? '' : ' selected="selected"';
	            firstOption += '>« Select ' + (select.attr('title') || 'Options') + ' »';
	            firstOption += '</option>';
	            select.prepend(firstOption);
	        });
	    }
	}

	// iterate selected taco options and calculate subtotal
	function calculateSubtotal(){
		var vals = [];
		
		$("#tacoBuilder *:checked, #tacoBuilder *:selected").each(function(i, el){
			vals.push( $(el).attr("data-cost") || 0 );
		});

		return vals.reduce(function(a, x){
			return a + parseFloat(x);
		}, 0).toFixed(2);
	}

	function validate(query){
		var controls = $(query),
			valid = true;

		controls.each(function(i, el){
			valid = new Validator($(el)).validate() && valid;
		});

		return valid;
	}

})();