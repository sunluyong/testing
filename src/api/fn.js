module.exports = {
  concat: str => {
    let count = 1000;
    let ret = '';
    while (count--) {
      ret += str;
    }

    return ret;
  },
  push: str => {
    let count = 1000;
    let ret = [];
    while (count--) {
      ret.push(str);
    }

    return ret.join('');
  }
};
