function Game(){
	dragster(); 
	turnon();
	
	
}

function moves() {
	window.addEventListener("keyup",function(event){
		if (event.keyCode === 39) {
			advance();					
		}	
	});
}



	function preStageLights (){
	var preStageLight = document.getElementById("preStageLight");	
	preStageLight.setAttribute("src", "img/stage-off.png");
	
	var StageLight = document.getElementById("stageLight");
	StageLight.setAttribute("src", "img/stage-on.png");	
	setTimeout(yellowLight1,1500);
	
	}
	
	function yellowLight1(){
	var bulb1 = document.getElementById("start1");
	bulb1.setAttribute("src", "img/start1_on.png");
	setTimeout(yellowLight2,1500);
	}

	function yellowLight2(){
	var bulb2 = document.getElementById("start2");
	bulb2.setAttribute("src", "img/start2_on.png");
	var bulb1 = document.getElementById("start1");
	bulb1.setAttribute("src", "img/start1_off.png");
	setTimeout(yellowLight3,1500);
	}	

	function yellowLight3(){
	var bulb3 = document.getElementById("start3");
	bulb3.setAttribute("src", "img/start3_on.png");
	var bulb2 = document.getElementById("start2");
	bulb2.setAttribute("src", "img/start2_off.png");
	setTimeout(greenLight,1500);
	}	

	function greenLight(){
	var bulb4 = document.getElementById("green");
	bulb4.setAttribute("src", "img/startGreen_on.png");
	var bublb3 = document.getElementById("start3");
	bublb3.setAttribute("src", "img/start3_off.png");
	}	

	function redLight () {
		var bulb5 = document.getElementById("red");
		bulb5.setAttribute("src", "img/foul_on.png");
		var bublb4 = document.getElementById("green");
		bublb4.setAttribute("src", "img/start3_off.png");
	}




function dragster(){
	this.$carrito = document.getElementById("dragster1");
	this.$carrito.style.left = "26px";
}

function turnon(){
	window.addEventListener("keyup",function(event){
		if (event.keyCode === 84) {
			moves();
		}
	});	

}


function advance () {
	this.$carrito.style.left = parseInt(this.$carrito.style.left,10) + 10 + "px";
	
	
	
	if (this.$carrito.style.left === "146px") {
		 preStageLights();	
	} else if (parseInt(this.$carrito.style.left) > 146) {
		console.log(this.$carrito.style.left);
		redLight();
	}
}


Game();



