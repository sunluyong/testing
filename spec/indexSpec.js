const {add, mul, cover} = require('../src/api/index');

describe('Index', function() {
  describe('#add()', () => {
    it('should return 10 when add(2, 5, 3)', () => {
      expect(add(2, 5, 3)).toBe(10);
    });

    it('should return 5 when add(2, 0, 3)', () => {
      expect(add(2, 0, 3)).toBe(5);
    });
  });

  describe('#mul()', () => {
    it('should return 30 when mul(2, 5, 3)', () => {
      expect(mul(2, 5, 3)).toBe(30);
    });
  });

  describe('#cover', () => {
    it('should return 25 when cover(5, 5)', () => {
      expect(cover(5, 5)).toBe(25);
    });

    it('should return 10 when cover(8, 2)', () => {
      expect(cover(8, 2)).toBe(10);
    });

    it('should return -6 when cover(2, 8)', () => {
      expect(cover(2, 8)).toBe(-6);
    });
  });
});
