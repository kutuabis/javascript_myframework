# wokijs
javascript canvas code

# example use woki.js

<canvas id="myCanvas" width="800" height="600" style="border:1px solid #d3d3d3;"> 
	    Your browser does not support the canvas element. 
</canvas> 

<script src="index.js"></script> 

<script> 
var line1 = new DrawLine(); // first object
	//linewidth, linecolor, x1, y1, x2, canvas.height, canvas.width
	line1.multiVerLine(2,"blue",0,0,0,600,800); 
	//linewidth, linecolor, x1, y1, canvas.width, y2, canvas.height
	line1.multiHorLine(2,"red",0,0,800,0,600);
</script> 
