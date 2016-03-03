var Game = {
  resetEnemy: function() {
    this.enemyTop = -20;
    var left = Math.floor(Math.random()*5) * 10;
    this.enemy.css("left", left + "vmin");
  },
  moveEnemy: function() {
    if (this.enemyTop > 100) {
      this.resetEnemy();
    }
    this.enemyTop += 1;
    this.enemy.css("top", this.enemyTop + "vmin");
  },
  init: function() {
    this.enemy = $('#enemy_car');
    this.resetEnemy();
    var _this = this;
    setInterval(function(){
      _this.moveEnemy();
    }, 30);

    $(document).bind('keydown', 'right', function() {
      console.log("Right key pressed")
    });
    $(document).bind('keydown', 'left', function() {
      console.log("Left key pressed")
    });
  }
}

$(document).ready(function() {
  Game.init();
});
