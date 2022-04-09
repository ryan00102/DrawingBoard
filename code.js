let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let td = document.getElementsByTagName("td");
let showcolor = document.getElementById("showcolor");
let lineBorder = document.getElementById("border");
let dragging = false;

        
function changeBorder(){
   context.lineWidth = lineBorder.value;
}
function changeColor(obj) {
    context.strokeStyle = obj.style.backgroundColor;
    showcolor.style.backgroundColor = context.strokeStyle;
}
function changeColor2(obj){
    context.strokeStyle = obj.value;
     showcolor.style.backgroundColor = context.strokeStyle;
}
canvas.onmousedown = function(e){
    dragging = true;
    context.beginPath();
    context.moveTo(e.offsetX, e.offsetY);
}
canvas.onmousemove = function(e){
    document.getElementById("xpos").value = "x = " + e.offsetX;
    document.getElementById("ypos").value = "y = " + e.offsetY;
    if(dragging == true){
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
    }
}
canvas.onmouseout = function(e){
    dragging = false;
}
canvas.onmouseup = function(){
    dragging = false;
}