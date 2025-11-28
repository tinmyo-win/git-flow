const { add, multiply } = require('./index');

describe('Math operations', () => {
  describe('add function', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(0, 5)).toBe(5);
      expect(add(10, 10)).toBe(20);
    });

    // update in other file
    test('should handle negative numbers', () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(2, -3)).toBe(-1);
      expect(add(-2, -3)).toBe(-5);
    });

    test('should handle zero', () => {
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('multiply function', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(10, 10)).toBe(100);
    });

    test('should handle negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(2, -3)).toBe(-6);
      expect(multiply(-2, -3)).toBe(6);
    });

    test('should handle zero', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });
  });
});
