const { add, mul } = require('../src/api/index');

describe('#add', () => {
  test('add(2, 5, 3) equals 10', () => {
    expect( add(2, 5, 3)).toBe(10);
  });
});

describe('#mock', () => {
  const mockCallback = jest.fn();
  [0, 1].forEach(mockCallback);

  test('mock function calls length', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test('mock function calls arguments', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });
});
