function min(x, y) {
  return x - y;
}

module.exports = {
  add: (...args) => {
    return args.reduce((pre, cur) => {
      return pre + cur;
    });
  },
  mul: (...args) => {
    return args.reduce((pre, cur) => {
      return pre * cur;
    });
  },
  cover: (a, b) => {
    if (a > b) {
      return a + b;
    } else if (a === b) {
      return a * b;
    } else {
      return min(a, b);
    }
  }
};
