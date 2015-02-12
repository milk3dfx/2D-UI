$(document).ready(function(){
	console.log("Ready");
	$("#container").UIContext();
	$("#line1").UILine(10,0,200,100);
	//$("#line2").UILine(10,100,200,100);
	//$("<div>").UILine(10,200,200,100).appendTo("#container");
	$("#callout1").UICallout(10, 200, 300, 400);
	$("<div>").UIPath([[50,0],[150,0],[150,100],[100, 120], [50, 0]]).appendTo("#container");
})