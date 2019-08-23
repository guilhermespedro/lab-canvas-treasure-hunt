// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
// Iteration 1
function drawGrid() {

  for (let x = 0; x <= width; x+=50) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
    for (let y = 0; y <= height; y+=50) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }
}
class Treasure {
  constructor(row,col) {
    this.row = row
    this.col = col
    // this.setRandomPosition = () => {
    //   this.col = Math.floor(Math.random()*10);
    //   this.row = Math.floor(Math.random()*10);
        this.image = new Image();
        this.image.src = 'images/treasure.png';
    }
  
    draw(ctx) {
    ctx.drawImage(this.image, this.row*50, this.col*50,50, 50);
  }

}
  
  

let treasure = new Treasure(1,1);


class Character {
  constructor(row,col) {
    this.row = 0;
    this.col = 0;
  }
  moveUp() {
    this.row--
  }
  moveDown() {
    this.row++
  }
  moveRight() {
    this.col++
  }
  moveLeft() {
    this.col--
  }
};
let player = new Character(0,0);

document.onkeydown = function(e) {
  e.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)
  switch (e.keyCode) {
    case 37: 
      console.log('left')
      break
    case 38: 
      console.log('up')  
      break
    case 39: 
      console.log('right')
      break
    case 40: 
      console.log('down')
      break
  }
}



function drawPlayer(player) {
  const x = player.col * 50;
  const y = player.row * 50;

  const image = new Image();
  image.src = '/starter-code/images/character-down.png';

  image.addEventListener('load', function () {
    const imageWidth = image.width;
    const imageHeight = image.height;

    ctx.drawImage(image, x, y, imageWidth, imageHeight);
  });
}



function drawTreasure(treasure) {
  
}


function drawEverything() {
  drawGrid()
  drawPlayer(player)
  treasure.draw(ctx)
  window.requestAnimationFrame(drawEverything)
}


drawEverything() 