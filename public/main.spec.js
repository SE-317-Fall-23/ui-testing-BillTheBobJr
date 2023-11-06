//@vitest-environment jsdom
import userModel from './main.js';
import {test, expect} from 'vitest'

test('validateName returns true', () => {
    expect(userModel.validateName('John')).toBe(true);
  });