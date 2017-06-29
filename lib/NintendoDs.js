function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}


var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function NintendoDS(){
  GameConsole.call(this, 'Nintendo DS');

}

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);


module.exports = NintendoDS;