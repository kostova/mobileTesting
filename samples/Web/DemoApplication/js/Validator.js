(function(){

	var counter = 0,
		controlList = {};


	/**
	 * Validator takes a single jquery element and looks for `data-rules`
	 * to determine what rules to apply and applies the jquery element's
	 * value property to the rules. if Validator is called more than once
	 * against the same element, it returns the existing Validator rather
	 * than creating a new one.
	 * @param {JQuery} $control  the jQuery element to be evaluated
	 */
	function Validator($control){

		// if this control already has a Validator object
		// just return the existing object
		var existingId = $control.attr("data-validatorId");
		if( existingId && controlList[existingId]){
			return controlList[existingId];
		}

		this.id = counter++;
		this.$control = $control;
		this.$label = $control.closest("label");
		this.valid = true;
		this.rules = $control.attr("data-rules");
		if(this.rules) this.rules = this.rules.split(" ");
		this.brokenRules = [];

		// evaluate on key stroke if control has been
		// marked invalid by a previous valuation
		$control.on("keyup", function(){
			if(!this.valid) this.validate();
		}.bind(this));

		$control.attr("data-validatorId", this.id);

		// store a reference to this control for future lookups
		controlList[this.id] = this;
	}

	Validator.prototype = {
		constructor: Validator,
		markValid: function(){
			this.$control.removeClass("error");
			this.$label.removeClass("error");
		},
		markInvalid: function(){
			this.$control.addClass("error");
			this.$label.addClass("error");
		},

		clearMessage: function(rule){
			this.$errmsgContainer.find(".errmsg."+ rule).remove();
			if(!this.$errmsgContainer.children().length){
				this.$errmsgContainer.remove();
				this.$errmsgContainer = null;
			}
		},
		addMessage: function(rule){
			// if no error message container exists, create one
			if(!this.$errmsgContainer){
				this.$errmsgContainer = $("<div class='errmsgContainer'></div>");
				this.$label.append(this.$errmsgContainer);
			}
			this.$errmsgContainer.append("<span class='"+ rule +" errmsg'>* "+ this.ruleDefs[rule].message +"</span>");
		},

		validate: function(){

			// if no rules, then this field is valid
			if(!this.rules) return true;

			var val = this.$control.val();

			// default to true for this evaluation
			this.valid = true;

			this.rules.forEach(function(rule){
				var isValid = true,
					ruleIndex = this.brokenRules.indexOf(rule);

				// evaluate rule assertion
				if(this.ruleDefs[rule]){
					isValid = this.ruleDefs[rule].assert(rule, val);

				// if the rule does exist, just mark this as valid
				} else {
					isValid = true;
				}

				// store or remove reference to this rule failure/success
				if(isValid && ruleIndex >= 0){
					this.brokenRules.splice(ruleIndex, 1);
					this.clearMessage(rule);
				} else if(!isValid && ruleIndex === -1){
					this.brokenRules.push(rule);
					this.addMessage(rule);
				}

				this.valid = this.valid && isValid;

			}.bind(this));

			if(this.valid){
				this.markValid(this.$control);
				return true;
			} else {
				this.markInvalid(this.$control);
				return false;
			}
		},

		// TODO - addRuleDef() or setRuleDefs() or something...
		ruleDefs: {
			"required": {
				message: "required",
				assert: function(rule, val){ return !!val; }
			},
			"tel":{
				message: "invalid phone number",
				assert: function(rule, val){
					// TODO - leading 1 or international
					return val.replace(/[^0-9]/g, "").length === 10;
				}
			},
			"zip":{
				message: "invalid zip",
				assert: function(rule, val){
					// TODO - zip+4
					return val.replace(/[^0-9]/g, "").length === 5;
				}
			},
			"number":{
				message: "invalid number",
				assert: function(rule, val){ return !isNaN(val); }
			},
			"email":{
				message: "invalid email",
				// TODO - this isnt good at all...
				assert: function(rule, val){ return ~val.indexOf("@") && ~val.indexOf("."); }
			},
			"cc": {
				message: "invalid credit card number",
				assert: function(rule, val){
					return val.replace(/[^0-9]/g, "").length === 16;
				}
			}
		}
	};

	window.Validator = Validator;

})();