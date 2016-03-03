var Game = {
  resetEnemy: function() {
    this.enemyTop = -20;
    this.enemyLeft = Math.floor(Math.random()*5) * 10;
    this.enemy.css("left", this.enemyLeft + "vmin");
  },
  stopGame: function() {
    clearInterval(this.animator);
  },
  checkCollision: function() {
    if (this.enemyTop > 60) {
      var diffLeft = Math.abs(this.carLeft - this.enemyLeft);
      if (diffLeft < 10) {
        this.stopGame();
      }
    }
  },
  moveEnemy: function() {
    if (this.enemyTop > 100) {
      this.resetEnemy();
    }
    this.enemyTop += 1;
    this.enemy.css("top", this.enemyTop + "vmin");
    this.checkCollision();
  },
  moveRight: function() {
    var _this = Game;
    if (_this.carLeft < 40) {
      _this.carLeft += 10;
      _this.car.css("left", _this.carLeft + "vmin");
    }
  },
  moveLeft: function() {
    var _this = Game;
    if (_this.carLeft >= 10) {
      _this.carLeft -= 10;
      _this.car.css("left", _this.carLeft + "vmin");
    }
  },
  init: function() {
    this.enemy = $('#enemy_car');
    this.car = $('#my_car');
    this.carLeft = 0;
    this.resetEnemy();
    var _this = this;
    this.animator = setInterval(function(){
      _this.moveEnemy();
    }, 30);

    $(document).bind('keydown', 'right', _this.moveRight);
    $(document).bind('keydown', 'left',  _this.moveLeft);
  }
}

$(document).ready(function() {
  Game.init();
});
