import { describe, test, expect } from 'bun:test';
import { sum } from '../src/index';

describe('sum', () => {
  test('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('should return the sum of two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test('should fail if the sum is incorrect', () => {
    expect(sum(1, 2)).not.toBe(4);
  });
});