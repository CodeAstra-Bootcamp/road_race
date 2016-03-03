$(document).ready(function() {
  var position = -20;
  setInterval(function(){
    var enemy = $('#enemy_car');
    if (position > 100) {
      position = -20;
      var left = Math.floor(Math.random()*5) * 10;
      enemy.css("left", left + "vmin");
    }
    position += 1;
    enemy.css("top", position + "vmin");
  }, 30);
});
