function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("black");
  fill("yellow");
  circle(200, 200, 300); // rosto
  fill("white");
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  line(150, 270, 250, 235); // boca
  fill("black");
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(123, 115, 178, 113); // sobrancelha esquerda
  line(225, 116, 279, 106); // sobrancelha direita
  // circle(150, 150, 10); // pupila esquerda
  circle(250, 150, 10); // pupila direita

  circle(mouseX, mouseY, 10); // nova pupila esquerda

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}