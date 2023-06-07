import {describe, expect, test} from '@jest/globals';
import {sum} from '../sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    const testResult = sum(1,2);
    expect(testResult).toBe(3);
  });
});