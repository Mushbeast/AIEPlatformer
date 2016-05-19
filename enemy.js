var LEFT = 0;
var RIGHT = 1;
var ANIM_IDLE_LEFT = 0;
var ANIM_JUMP_LEFT = 1;
var ANIM_WALK_LEFT = 2;
var ANIM_IDLE_RIGHT = 3;
var ANIM_JUMP_RIGHT = 4;
var ANIM_WALK_RIGHT = 5;
var ANIM_MAX = 6;

var Enemy = function(x, y) {
	
	this.sprite = new Sprite("bat.png");
	this.sprite.buildAnimation(2, 1, 88, 94, 0.3, [0,1]);
	this.sprite.setAnimationOffset(0, -35, -40);
	
	this.position = new Vector2();
	this.position.set(x, y);
	
	this.velocity = new Vector2();
	
	this.moveRight = true;
	this.pause = 0;
	// this.sprite = new Sprite("ChuckNorris.png");
// this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
// [0, 1, 2, 3, 4, 5, 6, 7]);
// this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
// [8, 9, 10, 11, 12]);
// this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
// [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
// this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
// [52, 53, 54, 55, 56, 57, 58, 59]);
// this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
// [60, 61, 62, 63, 64]);
// this.sprite.buildAnimation(12, 8, 165, 126, 0.05,
// [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]);
// for(var i=0; i<ANIM_MAX; i++)
// {
// this.sprite.setAnimationOffset(i, -55, -87);
// }
// //this.image = document.createElement("img");
// this.position = new Vector2();
// this.position.set( 9*TILE, 0*TILE );
// // this.width = 159;
// // this.height = 163;
 this.width = 110;
 this.height = 110;
// this.offset = new Vector2(TILE/4, -TILE/4);
// this.offset.set(-55,-87);
// this.velocity = new Vector2();
// this.falling = true;
// this.jumping = false;
// this.direction = LEFT;
// //this.image.src = "hero.png";
// this.cooldownTimer = 0;
};

Enemy.prototype.update = function(dt)
{
this.sprite.update(dt);
if(this.pause > 0)
{
this.pause -= dt;
}
else
{
var ddx = 0; // acceleration
var tx = pixelToTile(this.position.x);
var ty = pixelToTile(this.position.y);
var nx = (this.position.x)%TILE; // true if enemy overlaps right
var ny = (this.position.y)%TILE; // true if enemy overlaps below
var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
var cellright = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty);
var celldown = cellAtTileCoord(LAYER_PLATFORMS, tx, ty + 1);
var celldiag = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty + 1);
if(this.moveRight)
{
if(celldiag && !cellright) {
ddx = ddx + ENEMY_ACCEL; // enemy wants to go right
}
else {
this.velocity.x = 0;
this.moveRight = false;
this.pause = 0.5;
}
}
if(!this.moveRight)
{
if(celldown && !cell) {
ddx = ddx - ENEMY_ACCEL; // enemy wants to go left
}
else {
this.velocity.x = 0;
this.moveRight = true;
this.pause = 0.5;
}
}
this.position.x = Math.floor(this.position.x + (dt * this.velocity.x));
this.velocity.x = bound(this.velocity.x + (dt * ddx),
-ENEMY_MAXDX, ENEMY_MAXDX);
}
}

//if(keyboard.isKeyDown(keyboard.KEY_UP) == true){
//	jump = true;
//}
// if(this.cooldownTimer > 0)
// {
	// this.cooldownTimer -= deltaTime;
// }
// if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true && this.cooldownTimer <= 0) {
	// sfxFire.play();
	// this.cooldownTimer = 0.3;
// }



 // var wasleft = this.velocity.x < 0;
 // var wasright = this.velocity.x > 0;
 // var falling = this.falling;
 // var ddx = 0; // acceleration
 // var ddy = GRAVITY;

 // if (left)
 // ddx = ddx - ACCEL; // Enemy wants to go left
 // else if (wasleft)
 // ddx = ddx + FRICTION; // Enemy was going left, but not any more
 // if (right)
 // ddx = ddx + ACCEL; // Enemy wants to go right
 // else if (wasright)
 // ddx = ddx - FRICTION; // Enemy was going right, but not any more
 // if (jump && !this.jumping && !falling)
 // {
 // ddy = ddy - JUMP; // apply an instantaneous (large) vertical impulse
 // this.jumping = true;
 // if(this.direction == LEFT)
// this.sprite.setAnimation(ANIM_JUMP_LEFT)
// else
// this.sprite.setAnimation(ANIM_JUMP_RIGHT)
 // }
 
  // calculate the new position and velocity:
 // this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
 // this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
 // this.velocity.x = bound(this.velocity.x + (deltaTime * ddx), -MAXDX, MAXDX);
 // this.velocity.y = bound(this.velocity.y + (deltaTime * ddy), -MAXDY, MAXDY);
 // if ((wasleft && (this.velocity.x > 0)) ||
 // (wasright && (this.velocity.x < 0)))
 // {
 // // clamp at zero to prevent friction from making us jiggle side to side
 // this.velocity.x = 0;
 // }

 // var position = this.position.copy();
 // position.add(this.offset);
// // we’ll insert code here later
 // // collision detection
 // // Our collision detection logic is greatly simplified by the fact that the
 // // Enemy is a rectangle and is exactly the same size as a single tile.
 // // So we know that the Enemy can only ever occupy 1, 2 or 4 cells.
 // // This means we can short-circuit and avoid building a general purpose
 // // collision detection
 // // engine by simply looking at the 1 to 4 cells that the Enemy occupies:
 // var tx = pixelToTile(this.position.x);
 // var ty = pixelToTile(this.position.y);
 // var nx = (this.position.x)%TILE; // true if Enemy overlaps right
 // var ny = (this.position.y)%TILE; // true if Enemy overlaps below
 // var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
 // var cellright = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty);
 // var celldown = cellAtTileCoord(LAYER_PLATFORMS, tx, ty + 1);
 // var celldiag = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty + 1);
 // // If the Enemy has vertical velocity, then check to see if they have hit a platform
 // // below or above, in which case, stop their vertical velocity, and clamp their
 // // y position:
 // if (this.velocity.y > 0) {
// if ((celldown && !cell) || (celldiag && !cellright && nx)) {
 // // clamp the y position to avoid falling into platform below
 // this.position.y = tileToPixel(ty);
 // this.velocity.y = 0; // stop downward velocity
 // this.falling = false; // no longer falling
 // this.jumping = false; // (or jumping)
 // ny = 0; // no longer overlaps the cells below
// }
 // }
  // else if (this.velocity.y < 0) {
// if ((cell && !celldown) || (cellright && !celldiag && nx)) {
 // // clamp the y position to avoid jumping into platform above
 // this.position.y = tileToPixel(ty + 1);
 // this.velocity.y = 0; // stop upward velocity
 // // Enemy is no longer really in that cell, we clamped them to the cell below
 // cell = celldown;
 // cellright = celldiag; // (ditto)
 // ny = 0; // Enemy no longer overlaps the cells below
// }
// }
// if (this.velocity.x > 0) {
 // if ((cellright && !cell) || (celldiag && !celldown && ny)) {
 // // clamp the x position to avoid moving into the platform we just hit
 // this.position.x = tileToPixel(tx);
 // this.velocity.x = 0; // stop horizontal velocity
 // }
// }
// else if (this.velocity.x < 0) {
 // if ((cell && !cellright) || (celldown && !celldiag && ny)) {
// // clamp the x position to avoid moving into the platform we just hit
// this.position.x = tileToPixel(tx + 1);
// this.velocity.x = 0; // stop horizontal velocity
 // }
// }


Enemy.prototype.draw = function()
{
	//this.sprite.draw(context, this.position.x, this.position.y);
this.sprite.draw(context,
this.position.x - worldOffsetX,
this.position.y);
}