(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var randomUa = require('random-useragent');

  nx.randomUa = function (inLength) {
    if (!inLength) return randomUa.getRandom();
    var result = new Array(inLength).fill(null);
    return result.map(randomUa.getRandom);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.randomUa;
  }
})();
