const canvas = document.querySelector('#canvas');


const context = canvas.getContext('2d');
console.log(context);

context.fillStyle = "blue";
context.fillRect(10, 10, 100, 100);

context.beginPath();
context.moveTo(150, 20);
context.lineTo(250, 50);
context.stroke();

context.beginPath();
context.arc(200, 100, 45, 0, Math.PI * 2, false);
context.strokeStyle = "red";
context.stroke();