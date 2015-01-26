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
	// REFACTORING
	// function preStageLights (){
	// for (var i = 0; i < 8; i++) {
	// 	var element = "bulb"+i;
 //   	var bulb = window[element];
 //   	var text = "img/start" + i + "-off.png";
 //   	var start = "start" + i;
 //   	bulb = document.getElementById(start);
 //   	bulb.setAttribute("src",text);
	
	// var bulb1 = document.getElementById("start1");	
	// bulb1.setAttribute("src", "img/start1-off.png");
	// var bulb2 = document.getElementById("start2");
	// bulb2.setAttribute("src", "img/start2-on.png");	
	// setTimeout(yellowLight1,1500);
	
	// }
	// }

	// REFACTOR
	function preStageLights (){
	var bulb1 = document.getElementById("start1");	
	bulb1.setAttribute("src", "img/start1-off.png");
	var bulb2 = document.getElementById("start2");
	bulb2.setAttribute("src", "img/start2-on.png");	
	setTimeout(yellowLight1,1500);
	}
	
	function yellowLight1(){
	var bulb3 = document.getElementById("start3");
	bulb3.setAttribute("src", "img/start3_on.png");
	setTimeout(yellowLight2,1500);
	}

	function yellowLight2(){
	var bulb4 = document.getElementById("start4");
	bulb4.setAttribute("src", "img/start4_on.png");
	var bulb3 = document.getElementById("start3");
	bulb3.setAttribute("src", "img/start3_off.png");
	setTimeout(yellowLight3,1500);
	}	

	function yellowLight3(){
	var bulb5 = document.getElementById("start5");
	bulb5.setAttribute("src", "img/start5_on.png");
	var bulb4 = document.getElementById("start4");
	bulb4.setAttribute("src", "img/start4_off.png");
	setTimeout(greenLight,1500);
	}	

	function greenLight(){
	var bulb6 = document.getElementById("start6");
	bulb6.setAttribute("src", "img/start6_on.png");
	var bublb5 = document.getElementById("start5");
	bublb5.setAttribute("src", "img/start5_off.png");
	}	

	function redLight () {
	var bulb7 = document.getElementById("start7");
	bulb7.setAttribute("src", "img/start7_on.png");
	var bublb6 = document.getElementById("start6");
	bublb6.setAttribute("src", "img/start6_off.png");
	setTimeout(alert("Foul!"),5000);
	}

function dragster(){
	this.$carrito = document.getElementById("dragster1");
	this.$carrito.style.left = "26px";
}

function turnon(){
	window.addEventListener("keyup",function(event){
		if (event.keyCode === 84) {
			document.getElementById("OffMessage").innerHTML = ("Engine On");
			document.getElementById("OffMessage").setAttribute("class","label label-success");	
			moves();
		}
	});	
}

function advance () {
	this.$carrito.style.left = parseInt(this.$carrito.style.left,10) + 10 + "px";
	var t1 = 0;
	var t2 = 0;	
	if (this.$carrito.style.left === "226px") {
		 preStageLights();	
	} else if (parseInt(this.$carrito.style.left) > 226 && document.getElementById("start6").getAttribute("src")=== "img/start6_off.png") {
		redLight();
	}else if (this.$carrito.style.left === "236px") {
		 t1 = performance.now();
		console.log("Inicia");
	}else if (this.$carrito.style.left === "936px") {
		 t2 = performance.now();
		var finalTime = (t2 - t1); 
		finalTime2 = ((finalTime/1000) % 60)/2.1;
		var totalTime = document.getElementById("watch-1").innerHTML = "00:00:" + (finalTime2);
		alert("Finished. Your time is: " + totalTime + " seconds");
	}
}

	// REFACTOR
	function resetGame(){
	document.getElementById("start1").setAttribute("src", "img/start1-on.png");
	document.getElementById("start2").setAttribute("src", "img/start2-off.png");	
	document.getElementById("start3").setAttribute("src", "img/start3_off.png");
	document.getElementById("start4").setAttribute("src", "img/start4_off.png");		
	document.getElementById("start5").setAttribute("src", "img/start5_off.png");	
	document.getElementById("start6").setAttribute("src", "img/start6_off.png");	
	document.getElementById("start7").setAttribute("src", "img/start7_off.png");
	dragster();	
	document.getElementById("OffMessage").innerHTML = ("Engine Off");
	document.getElementById("OffMessage").setAttribute("class","label label-danger");	
	
	document.getElementById("watch-2").innerHTML = "00:00:" + (finalTime2);
	document.getElementById("watch-1").innerHTML = "00:00:00";
	console.log(event.keyCode);
	}



Game();



