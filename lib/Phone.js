function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function Phone(phoneNumber){

   this.phoneNumber = phoneNumber;

}

Phone.prototype.callPhone = function(phoneNumber){
  return `${this.phoneNumber} calls ${phoneNumber}`;
};

module.exports = Phone;