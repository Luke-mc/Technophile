var extend = require('./extend.js');
var Tablet = require('./Tablet.js');
var Watch = require('./Watch.js');

function SmartWatch(){
  Watch.call(this);
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;