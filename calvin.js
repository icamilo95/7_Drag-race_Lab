var PrestageLights = function() {
				this.$el = document.getElementsByClassName("prestageLights");
				var prestageArray = Array.prototype.slice.call(this.$el);
				// var prestageArray = Array.prototype.slice.call(this.$el);
				// prestageArray.push(this.$el);
				console.log(prestageArray);
			};
PrestageLights.prototype.yellowOn = function() {
			var prestageArray = Array.prototype.slice.call(this.$el);
			prestageArray.forEach(function(lights) {
				lights.style.backgroundColor = "yellow";
				console.log(x);
			});
		};
Game.prototype.attachListeners = function() {
	    	var self = this;
	    	// listen for user input, specifically
	    	// for the user pressing the right arrow key
	    	window.addEventListener('keydown', function(event) { //try attaching this to the track to see if it'll prevent movement outside the box
	      		if (event.keyCode === 13) {
	    			engine.power = "on";
	    			console.log("vroom");
	    			engineButton.src="http://f.alldiz.net/psd/web/button/button-medium-green-spring-round-3d-website-free-steel-ring-psd.png";
	    			self.prestageLights.yellowOn();
	    		}