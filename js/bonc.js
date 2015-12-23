var outerLeft = -120;
var outerRight = window.innerWidth + 120;
var maxHeight = window.innerHeight - 120;
var gravity = 1;

var Boncer = function() {
	this.x = outerLeft + Math.floor(Math.random() * outerRight + 120);
	this.y = Math.floor(Math.random() * maxHeight);
	this.speedX = 2 + Math.floor(Math.random() * 5);
	this.speedY = 0;
}

Boncer.prototype.updateX = function (){
	this.x -= this.speedX;
	if(this.x < outerLeft){
		this.x = outerRight;
	}
}

Boncer.prototype.updateY = function (){
	this.speedY += gravity;
	this.y -= this.speedY;
	if(this.y < 0){
		this.y = 0;
		this.speedY = -this.speedY;
	}
}

var boncers = new Array();
var nBoncers = 0;

$(document).ready(function(){
	$('div').each(function (i) {
		$(this).attr('id', 'b' + nBoncers);
		boncers[nBoncers] = new Boncer();
		$(this).css("left", boncers[nBoncers].x);
		$(this).css("bottom", boncers[nBoncers].y);
		nBoncers++;
	});
	setInterval(onF, 40);
});

function onF(){
	for(var i = 0; i < nBoncers; i++){
		boncers[i].updateX();
		boncers[i].updateY();
		$('#b' + i).css("left", boncers[i].x);
		$('#b' + i).css("bottom", boncers[i].y);
	}
}
