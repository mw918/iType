function drawEyetrace(elementID, x, y)
{
    var canvas = document.getElementById(elementID);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, 20, 20);
}
