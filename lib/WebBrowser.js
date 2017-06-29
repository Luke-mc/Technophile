function extend(destination, source) {
  for(var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function WebBrowser(){

}

WebBrowser.prototype.open = function(url){
  return `Browsing to ${url}`;
};

module.exports = WebBrowser;