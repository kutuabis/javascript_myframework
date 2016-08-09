var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/*......text.......*/
function horText()
{
		var x=0; var y=0; var t=0;
		for (var a=0; a<=8; a++) //width 800/100=8
		{
			ctx.font = "10px Sans";
			ctx.fillStyle = "rgba(20,20,20,0.9)";
			ctx.textBaseline = "top";
			ctx.fillText("x="+t,x,y);
			x = x + 100;
			t = t + 100;
		}
}

function verText()
{
		var x=0; var y=0; var t=0;
		for (var a=0; a<=6; a++) //height 600/100=6
		{
			ctx.font = "10px Sans";
			ctx.fillStyle = "rgba(20,20,20,0.9)";
			ctx.textBaseline = "top";
			ctx.fillText("y="+t,x,y);
			y = y + 100;
			t = t + 100;
		}
}
/*........end of text.....*/

/*----line----*/

	function horLine()
	{
		var x1 = 0; var y1 = 0;	var x2 = 0; var y2 = 600;	
		for(var a=0; a<=80; a++) //width 800/10 = 80
		{
			ctx.lineWidth = 0.1;
			ctx.beginPath();
			ctx.strokeStyle = "grey";
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
			x1 = x1+10;
			x2 = x2+10;
		}
	}
	
	function verLine()
	{
		var x1 = 0; var y1 = 0;	var x2 = 800; var y2 = 0;
		for(var a=0; a<=60; a++) //height 600/10=60
		{
			ctx.lineWidth = 0.1;
			ctx.beginPath();
			ctx.strokeStyle = "grey";
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
			y1 = y1+10;
			y2 = y2+10;
		}
	}
/*------end of line..........*/

	/*.........mouse........*/	
	function mousexy()
	{
		canvas.addEventListener('mousemove',mousePos,false);
		
		function mousePos(ee)
		{
			var re = canvas.getBoundingClientRect();//10
			var posX = ee.clientX-re.left;//clientX=10 - 10 = 0
			var posY = ee.clientY-re.top; //clientY=10 - 10 = 0
			
		    var mes = "x:" + posX + " y:" + posY;
			writeMess(canvas, mes);
		}
	
		function writeMess(canvas,mes)
		{ 
			ctx.clearRect(10,20,120,30); //clear area rectangle
			ctx.font = '12pt Sans'; //set fontsize & family
			ctx.fillStyle ='grey'; //set fontcolor
			ctx.fillText(mes,10,25); //create text from var mes at position x=10,y=25
		}
	}
	/*........end of mouse.........*/  
    
   /*.........background color..........*/
   	function backcolorRed()
	{	myCanvas.style.background = "pink";	}
	
	function backcolorBlue()
	{	myCanvas.style.background = "lightblue";	}
	
	/*........end of background color.........*/
	function draw()
	{
		horLine();
		verLine();
		horText();
		verText();
	}

