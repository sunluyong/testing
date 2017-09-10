const {should, expect, assert} = require('chai');
should();

const {add, mul, cover} = require('../src/api/index');

describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  // it('should take less than 500ms as well', function(done){
  //   setTimeout(done, 590);
  // });
});

describe('Index', function() {
  describe('#add()', () => {
    it('should return 10 when add(2, 5, 3)', () => {
      assert.equal(add(2, 5, 3), 10);
    });

    it('should return 5 when add(2, 0, 3)', () => {
      add(2, 0, 3).should.equal(5);
    });
  });

  describe('#mul()', () => {
    it('should return 30 when mul(2, 5, 3)', () => {
      expect(mul(2, 5, 3)).to.equal(30);
    });
  });

  describe('#cover', () => {
    it('should return 25 when cover(5, 5)', () => {
      expect(cover(5, 5)).to.equal(25);
    });

    it('should return 10 when cover(8, 2)', () => {
      expect(cover(8, 2)).to.equal(10);
    });

    it('should return -6 when cover(2, 8)', () => {
      expect(cover(2, 8)).to.equal(-6);
    });
  });
});
