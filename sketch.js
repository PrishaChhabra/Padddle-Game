var ball,img,paddle,rand;
function preload() {
  ball2=loadImage("ball.png")
  paddle2=loadImage("paddle.png")               
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  
  ball=createSprite(20,200,10,10)
  ball.addImage("ball",ball2);
  ball.velocityX=9
  
  paddle=createSprite(370,200,10,50)
  paddle.addImage("paddle",paddle2)
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
   edges= createEdgeSprites()
  ball.bounceOff(paddle)
 ball. bounceOff(edges[2])
  ball.bounceOff(edges[3])
  ball.bounceOff(edges[1])
  paddle.bounceOff(edges[3])
  paddle.bounceOff(edges[2])
  ball.velocityX=ball.velocityX+2

  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-8
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=8
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  randomVelocity();
}

function randomVelocity()
{
if(ball.isTouching(paddle)){
  ball.velocityX=Math.round(random(1,100))
  
}
  
 
 
  
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

