//@vitest-environment jsdom
import userModel from './main.js';
import submit from './apiService.js';
import {test, expect} from 'vitest'


test('validateFirstName returns true', () => {
  expect(userModel.validateFirstName('John')).toBe(true);
});

test('validateFirstName returns false', () => {
  expect(userModel.validateFirstName('X12@7')).toBe(false);
});

test('validateLastName returns true', () => {
  expect(userModel.validateLastName('Smith')).toBe(true);
});

test('validateLastName returns false', () => {
  expect(userModel.validateLastName('@ndr0iD')).toBe(false);
});

test('validateUserName returns true', () => {
  expect(userModel.validateUserName('user1234')).toBe(true);
});

test('validateUserName returns false', () => {
  expect(userModel.validateUserName('#Hashtag Awesome')).toBe(false);
});

test('validateEmail returns true', () => {
  expect(userModel.validateEmail('mypersonal@gmail.com')).toBe(true);
});

test('validateEmail returns false', () => {
  expect(userModel.validateLastName('stupid@email@yelp.com')).toBe(false);
});

test('validateDOB returns true', () => {
  expect(userModel.validateDOB('01-01-2001')).toBe(true);
});

test('validateDOB returns false', () => {
  expect(userModel.validateDOB('01-01-9999')).toBe(false);
});

test('validateStreet returns true', () => {
  expect(userModel.validateStreet('Address 123')).toBe(true);
});

test('validateStreet returns false', () => {
  expect(userModel.validateStreet('WELcoME @ Home')).toBe(false);
});

test('validateCity returns true', () => {
  expect(userModel.validateCity('Ames')).toBe(true);
});

test('validateCity returns false', () => {
  expect(userModel.validateCity('@Home')).toBe(false);
});

test('validateState returns true', () => {
  expect(userModel.validateState('Iowa')).toBe(true);
});

test('validateState returns false', () => {
  expect(userModel.validateState('@klj!')).toBe(false);
});

test('validateZip returns true', () => {
  expect(userModel.validateZip('12345')).toBe(true);
});

test('validateZip returns false', () => {
  expect(userModel.validateZip('1234')).toBe(false);
});

test('apiService submits valid info, then return json', async () => {
  expect(submit("user", "first", "last", "street", "city", "state", "12345", "email@email.com")).toStrictEqual(Promise.resolve());
});

test('apiService submits valid info, then return json', async () => {
  expect(submit("user", "", "last", "street", "city", "state", "a", "email@email.com")).toStrictEqual(Promise.resolve());
});