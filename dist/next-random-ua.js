/*!
 * name: @feizheng/next-random-ua
 * description: Get a random user agent.
 * homepage: https://github.com/afeiship/next-random-ua
 * version: 1.0.0
 * date: 2020-06-13T02:21:14.949Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var randomUa = require('random-useragent');

  nx.randomUa = function (inLength) {
    if (!inLength) return randomUa.getRandom();
    var result = [];
    var i = 0;
    for (; i < inLength; i++) {
      result.push(randomUa.getRandom())
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.randomUa;
  }
})();

//# sourceMappingURL=next-random-ua.js.map
