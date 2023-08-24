var mouseEvent = "empty";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color = document.getElementById("color");
var radius = document.getElementById("radius");
var line_width = document.getElementById("line_width");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
  var color = document.getElementById("color").value;
  var radius = document.getElementById("radius").value;
  var line_width = document.getElementById("line_width").value;
  mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
