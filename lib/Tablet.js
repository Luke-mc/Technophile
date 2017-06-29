function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function Tablet(){

}

Tablet.prototype.touch = function(x, y){
  return {
    x: x,
    y: y
  };
};

module.exports = Tablet;