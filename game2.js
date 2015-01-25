function Game(){
	this.track = new Track1();
	this.dragster = new Dragster1(); 
	this.moves();

}

Game.prototype.moves = function(){
	var self = this;
	window.addEventListener("keyup",function(event){
		if (event.keyCode === 39) {
			self.dragster.advance();
					
		}
	});
};

function Dragster1(){
	this.carrito = document.getElementById('dragster1');
	this.carrito.style.left = "60px";
	
}

Dragster1.prototype.advance = function() {
	this.carrito.style.left = parseInt(this.carrito.style.left,10) + 10 + "px";	
};



new Game("dragster1","dragster2");
