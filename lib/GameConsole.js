function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function GameConsole(systemName){

  this.systemName = systemName;

}

GameConsole.prototype.play = function(game){
  return `${this.systemName} plays ${game.title}`;
};

module.exports = GameConsole;