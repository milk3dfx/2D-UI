/*
	2D-UI
	Author: Sergey Zolotykh
*/

if (typeof jQuery === 'undefined') { throw new Error('2D-UI requires jQuery') }

(function($){
	$.fn.UIContext = function(container){
		this.addClass("ui-context");
		return this;
	};
	
	$.fn.UILine = function(x1,y1, x2, y2){
		var length = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
		var angle = Math.atan2(y2-y1, x2-x1);
		this.addClass("ui-line").css({
			"top": y1 + "px",
			"left": x1 + "px",
			"width": length + "px",
			"transform-origin": "0 50%",
			"transform": "rotate("+(angle*180/Math.PI)+"deg)"
			});
		return this;
	};
	
	$.fn.UICallout = function(x,y, px, py){
		var callout = this;
		callout.addClass("ui-callout");
		callout.css({
			"top": y + "px",
			"left": x + "px"
			});
		setTimeout(function(){
			var w = callout.outerWidth();
			var h = callout.outerHeight();
			$("<div>").UILine(w/2,h-4, w/2,h+20).appendTo(callout);
			$("<div>").UILine(w/2,h+20,px-x,py-y).appendTo(callout);
		},2);
		return this;
	};
	$.fn.UIPath = function(points){
		if(points.length<2)
			return this;
		for(var i=0; i<points.length-1; i++){
			$("<div>").UILine(points[i][0],points[i][1],points[i+1][0],points[i+1][1]).appendTo(this);
		}
		return this;
	};
}(jQuery));