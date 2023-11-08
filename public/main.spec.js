//@vitest-environment jsdom
import userModel from './main.js';
import submit from './apiService.js';
import {test, expect, it} from 'vitest'


test('validateFirstName returns true', () => {
  expect(userModel.validateFirstName('John')).toBe(true);
});

test('validateFirstName returns false', () => {
  expect(userModel.validateFirstName('X12@7')).toBe(false);
});

it('validateFirstName snapshot', ()=>{
  var result = userModel.validateFirstName('Billy-Jean');
  expect(result).toMatchSnapshot();
});

test('validateLastName returns true', () => {
  expect(userModel.validateLastName('Smith')).toBe(true);
});

test('validateLastName returns false', () => {
  expect(userModel.validateLastName('@ndr0iD')).toBe(false);
});

it('validateLastName snapshot', ()=>{
  var result = userModel.validateLastName('John');
  expect(result).toMatchSnapshot();
});

test('validateUserName returns true', () => {
  expect(userModel.validateUserName('user1234')).toBe(true);
});

test('validateUserName returns false', () => {
  expect(userModel.validateUserName('#Hashtag Awesome')).toBe(false);
});

it('validateUserName snapshot', ()=>{
  var result = userModel.validateUserName('username123');
  expect(result).toMatchSnapshot();
});

test('validateEmail returns true', () => {
  expect(userModel.validateEmail('mypersonal@gmail.com')).toBe(true);
});

test('validateEmail returns false', () => {
  expect(userModel.validateLastName('stupid@email@yelp.com')).toBe(false);
});

it('validateEmail snapshot', ()=>{
  var result = userModel.validateEmail('email@address.com');
  expect(result).toMatchSnapshot();
});

test('validateDOB returns true', () => {
  expect(userModel.validateDOB('01-01-2001')).toBe(true);
});

test('validateDOB returns false', () => {
  expect(userModel.validateDOB('01-01-9999')).toBe(false);
});

it('validateDOB snapshot', ()=>{
  var result = userModel.validateDOB('01-01-2001');
  expect(result).toMatchSnapshot();
});

test('validateStreet returns true', () => {
  expect(userModel.validateStreet('Address 123')).toBe(true);
});

test('validateStreet returns false', () => {
  expect(userModel.validateStreet('WELcoME @ Home')).toBe(false);
});

it('validateStreet snapshot', ()=>{
  var result = userModel.validateStreet('Lincon Way');
  expect(result).toMatchSnapshot();
});

test('validateCity returns true', () => {
  expect(userModel.validateCity('Ames')).toBe(true);
});

test('validateCity returns false', () => {
  expect(userModel.validateCity('@Home')).toBe(false);
});

it('validateCity snapshot', ()=>{
  var result = userModel.validateCity('Ames');
  expect(result).toMatchSnapshot();
});

test('validateState returns true', () => {
  expect(userModel.validateState('Iowa')).toBe(true);
});

test('validateState returns false', () => {
  expect(userModel.validateState('@klj!')).toBe(false);
});

it('validateState snapshot', ()=>{
  var result = userModel.validateState('Iowa');
  expect(result).toMatchSnapshot();
});

test('validateZip returns true', () => {
  expect(userModel.validateZip('12345')).toBe(true);
});

test('validateZip returns false', () => {
  expect(userModel.validateZip('1234')).toBe(false);
});

it('validateZip snapshot', ()=>{
  var result = userModel.validateZip('50000');
  expect(result).toMatchSnapshot();
});

test('apiService submits valid info, then return json', async () => {
  expect(await submit("user", "first", "last", "street", "city", "state", "12345", "email@email.com"))
  .toStrictEqual({
    "username": "user",
    "firstName": "first",
    "lastName": "last",
    "address": {
      "street": "street",
      "city": "city",
      "state": "state",
      "zip": "12345"
    },
    "id":11,
    "email": "email@email.com"
  })
});