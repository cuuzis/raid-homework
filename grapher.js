/* 	Gustavs Venters, gv11017, 2012.05.26.	*/
function collectInputsFromForm() {
	var out = new Array();
	out[0] = {title:document.getElementById("label1").value, value:document.getElementById("value1").value};
	out[1] = {title:document.getElementById("label2").value, value:document.getElementById("value2").value};
	out[2] = {title:document.getElementById("label3").value, value:document.getElementById("value3").value};
	out[3] = {title:document.getElementById("label4").value, value:document.getElementById("value4").value};
	out[4] = {title:document.getElementById("label5").value, value:document.getElementById("value5").value};
	return out;
}

function validateInputs(a) {
	var valid = true;
	for (var x in a) {
		if (a[x].title.trim()=="") {var z="Ievadiet nosaukumu kolonnai "; z+=Number(x)+1; alert(z); valid = false}  // Vareja masivu numuret sakot ar [1],
		if (a[x].value.trim()=="") {var z="Ievadiet vertibu kolonnai "; z+=Number(x)+1; alert(z); valid = false}	// butu z+=Number(x);
		if (isNaN(a[x].value)) {var z="Izmainiet vertibu kolonnai "; z+=Number(x)+1; alert(z); valid = false}
		};
	return valid;
}

function drawGraph(a) {
	var big = Math.max(a[0].value, a[1].value, a[2].value, a[3].value, a[4].value);
	var k = 250/big;	//250 - lielaka stabina izmers
	var canvas = document.getElementById("graph");
	var ctx = canvas.getContext("2d");
	
	ctx.clearRect(0,0,600,400)
	ctx.font="bold 12pt Arial";
	ctx.fillStyle="DarkGray";
	ctx.fillText(a[0].title,65,350);
	ctx.fillText(a[1].title,165,350);
	ctx.fillText(a[2].title,265,350);
	ctx.fillText(a[3].title,365,350);
	ctx.fillText(a[4].title,465,350);
	
	ctx.fillStyle="LightGray";
	ctx.fillRect(60,300-a[0].value*k,80,a[0].value*k);
	ctx.fillRect(160,300-a[1].value*k,80,a[1].value*k);
	ctx.fillRect(260,300-a[2].value*k,80,a[2].value*k);
	ctx.fillRect(360,300-a[3].value*k,80,a[3].value*k);
	ctx.fillRect(460,300-a[4].value*k,80,a[4].value*k);

	ctx.strokeStyle="Black";
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.moveTo(20,300);
	ctx.lineTo(580,300);
	ctx.stroke();
}

window.onload = function() {
	var poga = document.getElementById("runCommand");
	poga.onclick = function() {
		var inputs = collectInputsFromForm();
		if (validateInputs(inputs)) {
			drawGraph(inputs);
		}
		else {	//Sliktas ievades zimejums
			var canvas = document.getElementById("graph");
			var ctx = canvas.getContext("2d");
			ctx.clearRect(0,0,600,400);
			ctx.beginPath();
			ctx.lineWidth=3;
			ctx.lineCap="round";
			ctx.strokeStyle="LightGray";
			ctx.arc(300,250,50,1.3*Math.PI,1.7*Math.PI);
			ctx.moveTo(280,180);
			ctx.arc(280,180,1,0,2*Math.PI);
			ctx.moveTo(320,180);
			ctx.arc(320,180,1,0,2*Math.PI);
			ctx.font="bold 12pt Arial";
			ctx.fillStyle="LightGray";
			ctx.fillText("Bad input",262,250);
			ctx.stroke();
		};
	}
}