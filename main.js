var mouseEvent = "empty";
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "Red";
width_of_line = 2;
Canvas.addEventlistener("mousedown",my_mousedown);
function my_mousedown(){
color = document.getElementById("color").value
width_of_line = document.getElementById("width_of_line").value
Radius = document.getElementById("Radius").value
mouseEvent = "mouseDown";
}
Canvas.addEventlistener("mousedown",my_mousemove);
function my_mousemove(e){
var current_position_of_mouse_x = e.client - canvas.offsetLeft;
var current_position_of_mouse_x = e.client - canvas.offsettop;
if(mouseEvent=="mouseDown"){
console.log("Current position of x and y cordinates =")
console.log("X= "+current_position_of_mouse_x+",y = "+current_position_of_mouse_y);
ctx.beginPath()
ctx.strokestyle = color;
ctx.linewidth =width_of_line;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
ctx.stroke();
}
}
Canvas.addEventlistener("mouseup",my_mouseup);
function mouseup(e){
mouseEvent = "mouseup";
}
Canvas.addEventlistener("mouseleave",my_mouseleave);
function mouseleave(e){
    mouseEvent = "mouseleave";
}
function Clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}