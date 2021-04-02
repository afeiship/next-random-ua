(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.randomUa should be string/array', function () {
      // console.log( nx.randomUa() );
      // console.log( nx.randomUa(3) );
      expect(typeof nx.randomUa()).toBe('string');
      expect(Array.isArray(nx.randomUa(3))).toBe(true);
    });
  });
})();
