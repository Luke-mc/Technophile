function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function Watch(){

  this.bodyPart = 0;

}

Watch.prototype.wear = function(bodyPart){
  this.bodyPart = bodyPart;
};

module.exports = Watch;