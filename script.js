console.log("%cHappy, Coding!\n", "color: red;font-size: 24px");

// canvas
const canvas = document.querySelector("#drawingCanvas");
// console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rectangle = document.createElement("img");
const ellipse = document.createElement("img");

rectangle.src = "./img/Rectangle.png";
ellipse.src = "./img/Ellipse.png";

let paintbrush = rectangle;

const context = canvas.getContext("2d");

const handleMouseMove = (event) => {
  // console.log("Function:)");
  // console.log(event);
  const left = event.clientX;
  const top = event.clientY;

  context.drawImage(paintbrush, left, top);
  // context.drawImage(ellipse, left, top);
};

const handleClick = () => {
  if (paintbrush === rectangle) {
    paintbrush = ellipse;
  } else {
    paintbrush = rectangle;
  }
};

canvas.addEventListener("click", handleClick);
canvas.addEventListener("mousemove", handleMouseMove);
