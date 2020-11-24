var ship, gameState, enemyship, score, laser;

function setup() {
  createCanvas(1600,800);
  gameState = 0;
  ship = createSprite(800,750,50,50);
}

function draw() {
  background(0,0,0);
  if (keyDown(LEFT_ARROW)) {
    ship.x -= 5;
  } 
  if(keyDown(RIGHT_ARROW)) {
    ship.x += 5;
  }
  if (keyWentDown(UP_ARROW)) {
    laser = createSprite(ship.x,ship.y - 50,10,50);
    laser.velocityY = -5;
    
  }
  if (frameCount%60 === 0) {
    enemyship = createSprite(random(0,800),0,20,20);
    enemyship.velocityY = 8;
    enemyship.lifetime = 100;
  }
  drawSprites();
}