var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d"); 

var DrawLine = function() 
{ 
	this.theLine = function (itsLineWidth,itsStrokeStyle,itsX1,itsY1,itsX2,itsY2) 							
	{ 
		ctx.lineWidth = itsLineWidth; 
		ctx.beginPath(); 
		ctx.strokeStyle = itsStrokeStyle; 
		ctx.moveTo(itsX1,itsY1); 
		ctx.lineTo(itsX2,itsY2); 
		ctx.stroke(); 
	}; 

	this.multiVerLine = function (itsLineWidth,itsStrokeStyle,itsX1,itsY1,itsX2,itsH,itsW)
	{
		var lineWidth = itsLineWidth;
		var strokeStyle = itsStrokeStyle;
		var x1 = itsX1;
		var y1 = itsY1;
		var x2 = itsX2;
		var y2 = itsH;
		var W = itsW;

		var width=W/10;
		for(var a=0; a<=width; a++) 
		{  
			this.theLine(lineWidth,strokeStyle,x1,y1,x2,y2); 
			x1=x1+10; 
			x2=x2+10; 
		} 
	}; 

	this.multiHorLine = function (itsLineWidth,itsStrokeStyle,itsX1,itsY1,itsW,itsY2,itsH)
	{
		var lineWidth = itsLineWidth;
		var strokeStyle = itsStrokeStyle;
		var x1 = itsX1;
		var y1 = itsY1;
		var x2 = itsW;
		var y2 = itsY2;
		var H = itsH;

		var height=H/10;
		for(var a=0; a<=height; a++) 
		{  
			this.theLine(lineWidth,strokeStyle,x1,y1,x2,y2); 
			y1=y1+10; 
			y2=y2+10; 
		} 
	}; 
}; 